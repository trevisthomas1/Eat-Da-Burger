# Eat-Da-Burger App
An application for tracking, eating and puking burgers!

## Overview

This application demonstrates a simple full stack application with a front end implemented with HTML/CSS and the backend implemented with Node.js and Express. HTML templating is done with the help of Handlebars.

The user can add a burger in the (you guessed it) *Add a Burger* section. This adds the new burger name entry into the MySQL database. The burger entry is added to the *Burgers to Try* section if the user selects *Not Devoured* or it is added to the *Burgers devoured* section if the user selects *Devoured*. The user may then eat any burger by clicking the *DEVOUR!* button, and the record updates accordingly in the database while moving to the *Burgers devoured* section. The user can also regurgitate the burger by clicking the *PUKE!* button. This updates the burger's devoured status in the database, and moves it to the *Burgers to Try* section. Check out the demo below!

## Demo

Experience the app: [Heroku Link](https://powerful-hollows-65620.herokuapp.com/burgers).
