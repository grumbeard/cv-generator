# The Odin Project
# Project #9: CV Generator

**Goal**: Create a cv/resume application using ReactJS as part of The Odin Project [curriculum](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/cv-application).

**Live Link**: 👉 https://grumbeard.github.io/cv-generator/

## About
This is the first React-based Project in the curriculum and provides practice in using props and state appropriately. I tried to make use of both class and functional components, and didn't spend a lot of time on the visuals as I can't wait to move on to learning about Hooks!

The most challenging part was the Work Experience Section with double-nested components: Work Experience > Job > Description. This architecture allows multiple job entries to be edited/added/deleted at once, with individual description sections made of any number of lines (bullet points in the CV) which can be added as needed.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technologies
HTML / CSS, JavaScript, ReactJS, Create-React-App, NPM, Webpack (incl. CLI, Webpack-Dev-Server), UniqId

## Key Learnings
- Making deep copies of state
  - Using spread operator
  - Using JSON parser
- Efficiently updating properties of nested state objects
- When to pass data as props vs state
  - Relying on props as source of truth instead of manipulating state in each child
  - (I started with recreating states from props for each child component and had to later revise lots of code)
- How to pass handlers from parent component to 2nd degree child component
- Adding assets to ReactJS application: files need to be imported instead of including relative path links in html tags
- Publishing on GH-Pages
- Lots of CSS tricks

## Screenshots
<img width="1297" alt="image" src="https://user-images.githubusercontent.com/51464365/125029644-94cf0200-e0bc-11eb-8b8c-b6c890a548a4.png">
