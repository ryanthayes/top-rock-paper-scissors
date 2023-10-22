# Rock, Paper, Scissors

<p align="center">
  <a href="#overview">Overview</a> •
  <a href="#what-i-learned">What I learned</a> •
  <a href="#useful-resources">Useful Resources</a> •
  <a href="#contact">Contact</a>
</p>

## Overview

The purpose of this project was to implement the grade-school classic "rock paper scissors”. 

- The first part of the project, was aimed at learning how to program the logic to make the basic game play work. 

- The second part of the project was to learn how to manipulate the DOM to create a UI to enhance the game play experience. 

### Outcomes

- Used HTML5 **semantic elements** for better readability and structure
- Used CSS3 **grid** and **flex** to manage layouts
- Used **Git** and **GitHub** for project management

### Live Version
**[Rock, Paper, Scissors](https://ryanthayes.github.io/top-rock-paper-scissors/)**

### Built With

 ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)   ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)   ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

![preview](https://github.com/ryanthayes/top-rock-paper-scissors/assets/127283656/fcf27ff3-fc0c-4fc7-9f84-e27e43c0d0e5)

## What I learned

This is the project where Javascript finally "clicked". It was my first real experience with manipulating the DOM using Javascript. This is what I was looking forward to when I began my Javascript journey. Learning the programming logic and syntax wasn't too exciting, but finally being able to control and manipulate the elements on a site in a practical project made it all come together.

I also learned to really embrace console.log() throughout the development process to debug each step along the way. It really helps to be able to "see" what the computer sees when something isn't going as planned. 

### Continued Development

I still need to work on where to begin with the logic of the program and breaking it down into smaller parts. I still have a bit of the "deer in the headlights" feeling when I begin a new project. I need to be able to do it without the guiding hand and prompts from The Odin Project.

### Proud of

One of the bits of code that I am proud of (and struggled to get to work) was replacing and existing image in the DOM based on the player and computer choices during each round of the game.

```javascript
function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
      case 'rock':
        document.getElementById('player-choice').src = "/images/icon-rock.png"; // Replace existing img with new img
        break
      case 'paper':
        document.getElementById('player-choice').src = "/images/icon-paper.png";
        break
      case 'scissors':
        document.getElementById('player-choice').src = "/images/icon-scissors.png";
        break
    }
  
    switch (computerSelection) {
      case 'rock':
        document.getElementById('computer-choice').src = "/images/icon-rock.png";
        break
      case 'papers':
        document.getElementById('computer-choice').src = "/images/icon-paper.png";
        break
      case 'scissors':
        document.getElementById('computer-choice').src = "/images/icon-scissors.png";
        break
    }
  }

```

## Useful resources

[**How to Build a Modal with JavaScript**](https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/)
 
 One of the "finishing touches" I like about my final design is the Modal that pops up when the game ends. I like how it mimics a video game "end game" screen. I had never done before. This tutorial from freeCodeCamp was a great resource.

## Contact

[![LinkedIN](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ryan-t-hayes/)
