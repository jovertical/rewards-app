## How the api is set up in Heroku

⚠️ This is just a reference to how the `packages/api` is created and configured in Heroku. Do not run these locally.

```bash
heroku apps:create resman-rewards-api
heroku buildpacks:add -a resman-rewards-api heroku-community/multi-procfile
heroku buildpacks:set -a resman-rewards-api heroku/nodejs
heroku config:set -a resman-rewards-api APP_BASE=packages/api
heroku config:set -a resman-rewards-api PROCFILE=packages/api/Procfile
```
