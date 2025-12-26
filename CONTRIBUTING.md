# Contributing

## Branching and deployments

- `main` is production.
- `dev` is staging.
- Create feature branches as `feat/*` from `dev`.
- Open PRs from `feat/*` -> `dev` to get a Vercel Preview Deployment.
- Merge `dev` -> `main` only when you want to ship to production.

## Standard workflow

```bash
# ensure you are on dev and up to date

git checkout dev
git pull

# create a feature branch

git checkout -b feat/your-short-name

# work, then commit

git add .
git commit -m "Describe the change"

git push -u origin feat/your-short-name
```

Open a PR from `feat/your-short-name` into `dev`.

When ready to ship:

```bash
# update dev and merge into main

git checkout dev
git pull

git checkout main
git pull

git merge dev

git push
```
