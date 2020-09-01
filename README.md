# md-carousel
Just another carousel component for Angular

## Why another carousel component?

I've using and testing another carousel components and I found them too heavy, having too much dependencies and options.
This component was designed to be simple, with hardcoded behaviors without dependencies.

Feel free to fork this project to make your own carousel with your desired behaviors for Angular.

## How it works?

This component will have always five slides. The number of slides in the datasource doesn't matter.
When the carousel shows up, you will see the slide number three and a piece of the slide number two at the left side and piece of slide number four at the rigth side.

When you slide the carousel do the right, you will bring the slide two to the center, and maybe a piece of the first slide will appear.
When the animation is done, the carousel will reset it's slides, bringing the third slide to the center, but now the third slide shows the content from the slide two.

All these behaviors are made throwgth Angular Animations.

All you have to do to use it is to make a template for the slides. The carousel will use 100% of it's container. The heigth is based on the heigth of you template.


