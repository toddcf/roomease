# README For This Project Management Tool App

This repository demonstrates the usage of sequelize within an express application.
The implemented logic is a simple task tracking tool.

1. create a database called projects_db

`mysql -u root`

`create database projects_db;`

2. install modules in package.json

`npm install`

3. install sequelize cli globally to be able to run migrations on your computer:

`npm install -g sequelize-cli`

4. run your migrations to create your tables

`sequelize db:migrate`

5. start up the app

`nodemon start`

if you don't have nodemon

`npm start`

6. Want to create a migration:

`sequelize migration:create create-<table name here>`

edit the migration file

to run the migration file:

`sequelize db:migrate`

You'll still have to make the model file

6. curious of all the commands you can do with sequelize cli?

go here: https://github.com/sequelize/cli

7. curious of all the sequelize relationships:

http://docs.sequelizejs.com/en/latest/docs/associations/

-----

In order to associate the models with each other, you need to change the models
like this:

```js
// task.js
// ...
classMethods: {
  associate: function(models) {
    Task.belongsTo(models.Person);
  }
}
// ...
```

```js
// user.js
// ...
classMethods: {
  associate: function(models) {
    Person.hasMany(models.Task)
  }
}
// ...
```

And finally you have to adjust the `config/config.json` to fit your environment.
Once thats done, your database configuration is ready!
