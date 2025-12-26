import { checkBotId } from 'botid/server';

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === 'string' && value.trim().length > 0;

const readJsonBody = async (req: any) => {
  if (req.body && typeof req.body === 'object') {
    return req.body;
  }

  if (typeof req.body === 'string') {
    return JSON.parse(req.body);
  }

  const raw = await new Promise<string>((resolve, reject) => {
    let data = '';
    req.on('data', (chunk: Buffer) => {
      data += chunk.toString('utf8');
    });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });

  if (!raw) {
    return null;
  }

  return JSON.parse(raw);
};

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false });
    return;
  }

  let payload: any;
  try {
    payload = await readJsonBody(req);
  } catch (error) {
    res.status(400).json({ ok: false });
    return;
  }

  const { email, botToken, botSession } = payload || {};
  const hasValidToken = botToken === undefined || typeof botToken === 'string';
  const hasValidSession = botSession === undefined || typeof botSession === 'string';

  if (!isNonEmptyString(email) || !hasValidToken || !hasValidSession) {
    res.status(400).json({ ok: false });
    return;
  }

  try {
    const verification = await checkBotId({
      advancedOptions: {
        headers: req.headers,
      },
    });

    if (verification.isBot) {
      res.status(403).json({ ok: false });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('BotID verification failed:', error);
    res.status(403).json({ ok: false });
  }
}
