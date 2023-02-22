# Online casino slot machine

A slot machine's standard layout features a screen displaying three or more reels that "spin" when the game is activated. Some modern slot machines still include a lever as a skeuomorphic design trait to trigger play. However, the mechanics of early machines have been superseded by random number generators, and most are now operated using buttons and touchscreens.

A lot of people are gambling and every day there are more people with the same hobby. Flight to Las Vegas can be time consuming and cost a lot more than planned, with this app you can practice your hobby from the comfort of your own home. Join million other users trying their luck on our slot machines.

![Responsice Mockup](https://github.com/Wulle91/lucky-7/blob/main/assets/images/amiresponsive.PNG)

## Features 

- __Header__

  - In the header we don't have the navigation bar because it's just one simple game and no extern links to other pages or sections.

  - In the header is the name of our game and welcome greeting with two images of lucky 777 on both sides.

  - I used wild wests type of font to associate users with America and big Vegas signs.

![Nav Bar](https://github.com/Wulle91/lucky-7/blob/main/assets/images/header.PNG)

- __The landing page image__

  - When the page loads, it instantly asks to add some credit without which we can't play the game, after input filled we can either press enter or OK button to start the game.

  - Under header we have small rolling text with explanation how the game works and how much each winning is worth.
            
  - All necessary information is over our game container.

![legend](https://github.com/Wulle91/lucky-7/blob/main/assets/images/rolling-legend.PNG)

- __Fruit container__

  - In section is our main game content fruits are already randomly ordered and waiting for a spin. Before we can play we have to add some credit. After input field is filled, we have to either press enter or ok button, our input will be credited in our credit field and we can start the game.
           
  - On spin button reel are turned and we have to get three of the same symbols to win, either rows or diagonal and combined, depending on the symbol win is calculated and all lines are summed together.

  - After our win is added to our credit, or bet subtracted, we are ready for new spin, in the meentime our spin button was disabled until all winnings or losses are calculated. 

  - All our winnings will be displayed over spin button all the time until we win something again.

![Fruits](https://github.com/Wulle91/lucky-7/blob/main/assets/images/fruit-container.PNG)

- __Technical container__

  - Under our main container with fruit reels, we have technical container where are displayed, our credit and our bet, in between is our spin button.
             
  - Credit can't be altered, it is calculated automatically on every spin reduced by Bet, which we can alter, and added by winnings. Spin button starts the new game.

![Technical Container](https://github.com/Wulle91/lucky-7/blob/main/assets/images/technical-container.PNG)

- __Game rules__

  -  The game is simple, spin the wheel and hope for the best :), you have to get three same symbols to win in any of the rows or diagonally, every spin reduces your credit and the game is over when you hit the 0, or you have to pay/credit your account to play further.

  -  3 x lemons =       Your bet * 5
     3 x grapes =       Your bet * 5
     3 x watermelons =  Your bet * 5 
     3 x oranges =      Your bet * 5 
     3 x bar simbols =  Your bet * 5
     3 x clovers =      Your bet * 10
     3 x 777 simbol =   Your bet * 15
           
  -  Ofcourse your wins are combined, if you get more than one matching line their winning are summed up and added to your credit.

  -  If you win more than 20x of your bet than window pops up with a big win image showing you how much you won.

![Locations Times](https://github.com/Wulle91/lucky-7/blob/main/assets/images/big-win.PNG)



## Testing 


I tested this page in different browsers Chrome, Firefox and Edge.

I confirmed that this project looks good and functions on all standard screen sizes using the devtools device toolbar.

I confirmed that the  header, game and technical section and footer are all readable and easy to understand.

I confirmed that the form works: requires entries in every field, will only accept an email in the email field, and the submit button works.


### Validator Testing 

- HTML
  - No errors were returned when passing through the official w3c validaor.
  [W3C validator game](https://github.com/Wulle91/lucky-7/blob/main/assets/images/html-validator.PNG)
  

- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://github.com/Wulle91/lucky-7/blob/main/assets/images/css-validator.PNG)

- JSHint    
  - 

- Accessibility     
  - I confirm that colors and fonts are easy to read by running it trought lighthouse in devtools. [lighthouse validator](https://github.com/Wulle91/blob/main/lucky-7/assets/images/lighthouse.PNG)

### Fixed Bugs

- My images, and sound didn't load, I used / on beginning of arc and that caused the error.
- My game didn't work because I declared more time the same variable, which caused the error. After deleting sufficient declaration code worked fine. 
 

## Deployment


- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository/lucky-7, navigate to the Settings tab 
  - From there click on Page
  - Once there the link of our homepage will be shown on top. 

The live link can be found here - https://wulle91.github.io/lucky-7/


## Credits 

### Content 

- The icons on spin button are taken from Frot Awesome       
- Instructions how do flexboxs works on youtube  [Specific YouTube Tutorial](https://www.youtube.com/watch?v=JJSoEo8JSnc)
- Instructions how infinite loops works on youtube, various videos, but most helpfull was  [Specific YouTube Tutorial](https://www.youtube.com/watch?v=0YMntQg-WIk&t=899s)
- I used stackverflow a lot, mostly because I wanted to check how to use various properties or if I had an error to see what was I doing wrong.
- I applied all I learned from code institute.

### Media

- 777 icons in header                             https://t3.ftcdn.net/jpg/01/20/10/44/360_F_120104437_3AgC0rejTXK3dLvUTYrI6rQOOjjDCH36.jpg       
- Fruit images                                    https://www.dreamstime.com/
- Background image                                https://www.grandsierraresort.com/hubfs/casino/Slots-carousels-on-GSR-casino-floor_q085_1920x1080.jpg 
- Big Win image                                   https://media.istockphoto.com/id/1244723054/vector/big-win-banner-for-online-casino-poker-roulette-slot-machines-card-games.jpg?s=612x612&w=0&k=20&c=1WwQM0G4-iAfT-l2TYdqkXJqwr_nI84CVGhLmYVY0NI=

