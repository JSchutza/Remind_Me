# commands to deploy

`heroku login`

`heroku git:remote -a <name-of-Heroku-app>`

- if on a branch run:
  `git push heroku branch-name:main`

- if you want to push the main branch run:
  `git push heroku`

- to migrate run:
  `heroku run npm run sequelize db:migrate`

- to seed run:
  `heroku run npm run sequelize db:seed:all`
