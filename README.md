# PEZ (Pure Evil Zombies) Dispenser
PEZ Dispenser built in Pixi.js
# Build/Usage Instructions
- Navigate to project folder
    ```sh
    $ cd pixi-pez
- Install dependencies
     ```sh
    $ npm install
    ```
- Launch a dev server
     ```sh
    $ npm start
    ```
- Click on the PEZ dispenser to alternate between two animations
- [Demo link](http://michaelkahane.com/pixi-pez)
- Object images and process shots are located in the process folder

# Process/Idea
I wanted to choose an object that I could turn into something playful. While browsing the halloween section at Target, I came across halloween themed PEZ Dispensers. I decided to play with what the PEZ acronym stands for to allow the character to dispense something other than candy pellets.

I began sketching out acronym possibilities and I decided on *Pure Evil Zombies*. The Vampire character would dispense zombies, and would also need to be refilled. Next I quickly sketched the animations required as well as a rough comp.

Then I decided on using Pixi.js to achieve this. I thought about using P5.js, but I really only needed rendering (no interaction with DOM elements necessary), and Pixi.js is faster because it uses WebGL. I modeled my code organization after [this example](https://github.com/Nazariglez/es6-pixi-bolierplate/tree/master/src) to keep it DRY and extensible with an object-oriented approach.

# Next Steps
I didn't get to the actual dispensing part (just the mouth opening and refill animations), so that would be my first next step. As it gets more complex, it would be useful to use add Stats.js to monitor framerate. Also, the background/title is just an image right now. It would be good to separate the foreground from the background to be able to add parallax if scrolling is added.

I was thinking it could become a game, possibly with the PEZ dispenser as the boss who has a 'weak spot' during its refill process. I also thought maybe you'd play as the PEZ dispenser, summoning zombies. To decide between these two I might make a paper version and ask people to act it out.

Another idea I had was to connect a sensor to the physical PEZ dispenser and use it as a controller. I also considered using gesture detection to trigger the animations (like looking up to trigger the dispense animation).
