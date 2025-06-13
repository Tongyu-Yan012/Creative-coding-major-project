
# Individual part - Ding Yuan - SID:550110974

## 1. Instruction

### a). Blinking Background Animation

Effect Description: The transparency of the background layer changes periodically, creating a blinking effect. The sinusoidal flickering changes in black and white, combined with the bright and intermittently visible dynamic background lines, are extremely aesthetically pleasing.

### b). Vertical Movement Animation
Effect Description: The whole structure will move vertically up and down, making regular roundtrips.

## 2. Dive Part: Details of my individual approach to animating the group code

### My Animation type: Time-Based: Employ timers and events for animation.

   ### - Other group members' animation:
   ### a). Press 'S' and a random apple will fall
   ### b).Clicking the play/pause button controls the music. When playing, the circle representing the apple dynamically scales up and down based on the amplitude of the music. When paused, both the music and the movement of the apple-representing circle stop.
   ### c).
 
### How it is unique from other group members:
 Other three group members all focus on the interaction and animation about the apple, my part choose the background and the whole tree. In my part, the transparency of the background layer changes periodically, creating a blinking effect. The sinusoidal flickering changes in black and white, combined with the bright and intermittently visible dynamic background lines, are extremely aesthetically pleasing. The whole structure will move vertically up and down, making regular roundtrips.

## 3.References to inspiration for animating
The design inspiration of this project comes from the biological forms and dynamic changes in nature. The complex branch structure simulates the growth form of the apple tree, while various animation effects endow the graphic structure of the apple tree with vitality, making it look more vivid and interesting. Through animations such as flashing backgrounds and vertical movements, a fantastical and dynamic atmosphere is created, which is different from the original artwork's sense of calmness and rationality, the changes makes it with more illusion and fantasy.

 ![reference 1](readmeImages/ref1.jpg)
 ![reference 2](readmeImages/ref2.jpg)

 ## 4.Technical explanation
 My part is based on the version of Commit 84cefc8 from the main, in which the growth process is not made and the whole tree appears at the same time. The reason why I did not based on the latest version from main is that my foucus is not on the growing of the tree but on the feeling of illusion from blinking and vertical movement that the whole tree brings, with original background the random walker line looks like lightenings as well.

### 1). Blinking Background Animation
Details: The opacity is varied from 0 to 255 with a blink period of 5000 milliseconds. 

How to do it: In the draw() function, we use the millis() function to get the current time and then use the sine wave function to calculate the opacity value. The opacity value is applied to the pixels in the background layer to achieve the blinking effect. 

How it works: The value of the sine wave function changes periodically between -1 and 1, and it is mapped to the transparency range 0 to 255 by the map() function, so that the transparency changes periodically.

### 2). Vertical Movement Animation

Details: The movement speed is 10 pixels/frame and the maximum offset is 150 pixels. When the maximum offset is reached, the direction of movement is reversed.

How to do it: In the draw() function, you control the overall vertical offset by updating the verticalOffset variable. When the offset reaches the maximum or minimum, the offset direction is changed.

How it works: Each time the draw() function is called, the verticalOffset is updated based on offsetDirection and moveSpeed. When the offset reaches a maximum or minimum, the offsetDirection is reversed, enabling a cycle of up and down movement.


Reference Links:

[Link Text](https://p5js.org/examples/calculating-values-map/)

[Link Text](https://p5js.org/reference/p5/loadPixels/)

[Link Text](https://p5js.org/reference/p5/alpha/)

[Link Text](https://p5js.org/reference/p5/millis/)

[Link Text](https://p5js.org/reference/p5/translate/)

[Link Text](https://www.youtube.com/watch?v=V2-qe1V-byg)

[Link Text](https://processing.org/reference/loadPixels_.html)

[Link Text](https://openprocessing.org/sketch/216075)

[Link Text](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Transformations)
