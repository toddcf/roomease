# README For Room[ease] app

This repository demonstrates the usage of sequelize within an express application.
The implemented logic is a simple task tracking tool.

1. create a database called dom_test

`mysql -u root`

`create database dom_test;`

2. adjust the `config/config.json` to fit your environment.

3. install modules in package.json

`npm install`

4. install sequelize cli globally to be able to run migrations on your computer:

`npm install -g sequelize-cli`

5. start up the app

`npm start`

-----

##Project name: Room[ease]

###Overview:
Room[ease] is a web app that allows users to find compatible roommates in the same area.

######Team members (in alphabetical order):
- Colin McDaniel (colinmcdaniel)
- Michelle Luo (luomichelle)
- Stephanie Orpilla (stephorpilla)
- Todd Croak-Falen (tcf)

######Functionality:
Users create a password-protected profile with their name and email, and then take a survey about themselves and what they desire in potential roommates. A satisfaction-maximizing algorithm displays potential roommates in the same geographical area in order of compatibility. Users have the option of updating their responses to the survey.