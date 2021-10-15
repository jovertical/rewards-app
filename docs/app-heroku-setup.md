## How the app is set up in Heroku

⚠️ This is just a reference to how the `packages/app` is created and configured in Heroku. Do not run these locally.

```bash
heroku apps:create resman-rewards-app
heroku buildpacks:add -a resman-rewards-app heroku-community/multi-procfile
heroku buildpacks:set -a resman-rewards-app https://github.com/heroku/heroku-buildpack-static.git
heroku config:set -a resman-rewards-app APP_BASE=packages/app
heroku config:set -a resman-rewards-app PROCFILE=packages/app/Procfile
```
