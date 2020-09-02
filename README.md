# ngm-carousel

Just another carousel component for Angular. The "m" stands for minimalist behaviors and options.

## Why another carousel component?

I've using and testing another carousel components and I found them too heavy, having too much dependencies and options.
This component was designed to be simple, with hardcoded behaviors without dependencies.

Feel free to fork this project to make your own carousel with your desired behaviors.

## How it works?

This component will have always five slides. The number of slides in the datasource doesn't matter. If datasource is the first 15 letters of the alphabet, the slides will show content like this:

[N] [O] [A] [B] [C]

When the carousel shows up, you will see the slide number three and a piece of the slide number two at the left side and piece of slide number four at the rigth side.

When you slide the carousel to the right, you will bring the slide two to the center, and a piece of the first slide will appear.
When the animation is done, the carousel will reset it's slides, bringing the third slide to the center again, but now the third slide shows the content from the slide two. Following the previous example, the carousel will show:

[M] [N] [O] [A] [B]

All these behaviors are made using Angular Animations.

All you have to do to use it is to make a template for the slides. The carousel will use 100% of it's container. The heigth is based on the heigth of your template.


