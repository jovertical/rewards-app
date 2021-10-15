# ResMan Rewards App

This is an app that allows users to redeem rewards.

## 🚀 Quick Start

```bash
# First, install dependencies
npm run setup

# Then, run the app
npm run dev

# Finally, open the app in your browser: http://localhost:3000
```

## Deployment

```bash
# First of all, create the remote branches:
git remote add heroku-app https://git.heroku.com/resman-rewards-app.git
git remote add heroku-api https://git.heroku.com/resman-rewards-api.git

# Then, build the applications
npm run build

# Deploy the API
git subtree push --prefix packages/app heroku-app main

# Deploy the App
git subtree push --prefix packages/api heroku-api main
```
