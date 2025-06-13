# Individual part - Tongyu Yan - SID:550151922

## Instructions
After the apple tree finishes growing, **Perlin noise** is applied to the apple positions to create a subtle jittering effect.

## Drive Part
Perlin noise

## Image Animated
In my animation, the apples exhibit a gentle jittering motion created using Perlin noise. By adjusting the intensity of the noise, the apples appear to sway as if moved by a breeze. This subtle movement complements the natural tones of the background, creating a multisensory impression—viewers, though indoors, can visually perceive the presence of wind. It serves as a form of synesthetic expression, translating the unseen into a felt experience through motion and color.

## References Inspiration
![inspiration](readmeImages/Optical%20illusions%20animate.jpg)
This work creates the illusion of a rotating light by animating the ellipse's minor radius to shrink and expand. Inspired by this technique, I considered whether a similar effect could be applied to the apples—by changing their radius dynamically, the apples would appear not only to move back and forth, but to sway and rotate around the branches as if blown by the wind.

## Technical explanation
This project enhances the visual realism of apples swaying in the wind by using Perlin noise to simulate gentle, natural movement. Instead of simple linear jitter, each apple now subtly rotates and scales using smooth noise-driven values. An angular offset creates the illusion of rotation around the branch, while a dynamic horizontal scaling factor mimics changes in perspective. These modifications are applied in the display() function using rotate() and scale() within the drawing context. The noise evolves over time, giving each apple an organic, unsynchronized motion that mimics wind-induced swaying without relying on rigid animation loops.

