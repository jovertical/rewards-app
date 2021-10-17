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

## ✨ Features

- [x] Prize Listing
- [x] Prize Details
- [x] Redeem the Prize ~ A User can only redeem a given prize if it has a stock once
- [x] Login & Registration System
- [x] Concurrent redeeming of prize ~ Multiple users can redeem the prize if stock is available

## Tech Stack

- [Vue 3 - Typescript](https://v3.vuejs.org/) - Bootstrapped with [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/) - Utility CSS classes
- [Node.js](https://nodejs.org/en/) - Backend programming language
- [Fastify - Typescript](https://www.fastify.io/) - Backend framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Mongoose](https://mongoosejs.com/) - ORM
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Production database (Running on a free cluster)
- [Heroku](https://www.heroku.com) - Frontend and Backend applications are both deployed here
- [Lerna](https://lerna.js.org/) - To manage the Frontend and Backend seamlessly in a single repo

## Deployment

```bash
# First of all, create the remote branches:
git remote add heroku-app https://git.heroku.com/resman-rewards-app.git
git remote add heroku-api https://git.heroku.com/resman-rewards-api.git

# Then, build the applications
npm run build

# Deploy the App
git subtree push --prefix packages/app heroku-app main

# Deploy the Api
git subtree push --prefix packages/api heroku-api main
```
