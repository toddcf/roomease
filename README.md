# room[ease]

Room[ease] is a roommate matching web application that helps users find compatible roommates in their area. After signing up, users take a quick compatibility survey about themselves and what they want in a roommate. Upon submitting, users are shown the top matches in their area sorted by compatibility percentage. Users have the option to email their matches in app.

<img width="1280" alt="screen shot 2017-01-11 at 12 03 17 am" src="https://cloud.githubusercontent.com/assets/18673328/21840268/6a044c8a-d791-11e6-89b4-0d833d7f711f.png">

## Instructions for Use after Cloning the Repo

1. Create a database called dom_test
   - `mysql -u root`
   - `create database dom_test;`

2. Adjust the config/config.json to fit your environment.

3. Install modules in package.json
    - `npm install`

4. Install sequelize cli globally to be able to run migrations on your computer:
    - `npm install -g sequelize-cli`

5. Start the app
    - `npm start`

## Roommate Compatibility Matching Algorithm Logic
Instead of being based on sameness, the room[ease] matching algorithm takes both a user's answers about themselves AND their preferences for potential roommates into consideration. 

<img width="946" alt="screen shot 2017-01-10 at 11 59 41 pm" src="https://cloud.githubusercontent.com/assets/18673328/21840738/ef3723e4-d793-11e6-9998-00e5527df434.png">

- All questions about the user were either/or. For example, the about personality asks, "Are you introverted or extroverted?" 
- Questions about roommate preference have three options. For example: "Do you prefer a roommate who is introverted or extroverted?" There are three options for that: introverted, extroverted, and don't care. 
- Based on these answers for this category, 2 users could be a 100%, 50%, or 0% match. 
- After all 8 questions are completed, the percentages across the questions are averaged for a total compatibility percentage. 

## Compatibility Example

User 1: Extroverted, Don't Care
User 2: Introverted, Introverted
User 3: Extroverted, Extroverted
- User 1 and User 2 would have 50% compatibility. User 1's preferences would be met, but User 2's wouldn't be.
- User 2 and User 3 would have 0% compatibility. Neither users' preferences would be met.
- User 3 and User 1 would have 100% compatibility. Both users' preferences would be met.

<img width="562" alt="screen shot 2017-01-11 at 12 20 16 am" src="https://cloud.githubusercontent.com/assets/18673328/21840724/d732359a-d793-11e6-8095-b133f101df01.png">

## Built With
Node, Express, MySQL, Sequelize, Handlebars.js, Nodemailer, jQuery, Bootstrap

## Team Members
- Colin McDaniel - [colinmcdaniel](https://github.com/colinmcdaniel)
- Michelle Luo - [luomichelle](https://github.com/luomichelle)
- Stephanie Orpilla - [stephorpilla](https://github.com/stephorpilla)
- Todd Croak-Falen - [toddcf](https://github.com/toddcf)
