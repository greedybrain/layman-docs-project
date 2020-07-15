# LaymanDocs

# Overview

This application is an attempt to make reading or parsing through different types of languages and/or frameworks documentation easier

![Layman Docs Video Walkthrough](https://user-images.githubusercontent.com/51010236/87561068-26fb2080-c68a-11ea-92a5-b71833d18d3a.gif)

[Demo](https://www.loom.com/share/066a103ac9954eac846791c44187bc9f) | [Blog](https://dev.to/greedybrain/rails-js-project-layman-docs-4bm1)

# Features

1. User can submit a post
2. User can upvote/downvote a post
3. User can upvote/downvote an elaboration
4. User can create elaborations on another users post

# Technologies Implemented

1. Vanilla JS
2. Rails 
3. Postgres
4. JWT Authentication

# Installation

***Backend/API***

1. ```git clone git@github.com:greedybrain/layman-docs-project.git```
2. cd into projects backend directory gomojii-backend
3. Run bundle install to install all of Gomojii's dependencies
4. Confirm that Postgres is installed on your machine. If not, get it here
5. Create the database by running rails db:create
6. Create migrations by running rails db:migrate
7. If applicable, run rails db:seed to generate any seed data
8. Lastly, run rails s or rails server to generate a live server
