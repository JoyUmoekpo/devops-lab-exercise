# DevOps Lab
In this lab you will practice traceability with RollBar.

## Overview
In this lab you will install Rollbar and implement it into a node application.

## Step 1
- Build a node application using express and deploy it to AWS EC2 (or, open up a node application you already have deployed to AWS EC2)

- Link your Rollbar account to your repo

- Back in your code, import Rollbar and create a new instance of it using your `post_server_item access token

- Add an endpoint and in the callback function, call a function that does not exist so you can test out Rollbar (hint: try using a try…catch block)

- Push your code, redeploy (if you don’t have automatic deployments on), and go to that endpoint to trigger your error

- Check your Rollbar dashboard, you should have an error being displayed

## Step 2
- Expand your error handling by creating custom Rollbar errors

- Create at least one Rollbar critical error

- Create at least one Rollbar warning

## Step 3
- Continue to build out your application by adding new features

- Make sure to include Rollbar error handling in your code (front-end or back-end)

- As you are testing your app locally, go check out your Rollbar dashboard to see if you have any errors

- Each time you have added a feature to your application, push your changes and redeploy

- Once deployed, go and test those features on the deployed site, checking out your Rollbar dashboard as yo go along
