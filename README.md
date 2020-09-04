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

## Code

```
    <p>Test with data</p>
    <ngm-carousel mainClassName="teste6Carrousel" buttonsClassName="teste6CarrouselButtons" 
        [dataSource]="[
            { teste: 'Slide 1', color:'#FF8888' }, 
            { teste: 'Slide 2', color:'#88FF88' }, 
            { teste: 'Slide 3', color:'#8888FF' }, 
            { teste: 'Slide 4', color:'#FFAAAA' }, 
            { teste: 'Slide 5', color:'#AAFFAA' }, 
            { teste: 'Slide 6', color:'#AAAAFF' }]" 
        [slideTemplate]="slideTemplate6">

        <ng-template #slideTemplate6 let-oferta="item">
            <div  class="slide-template"
            [style.background-color]="oferta.color"
            [style.width.%]="100"
            >{{oferta.teste}}
            </div>
        </ng-template>
    </ngm-carousel>

    <p>Test with img</p>
    <ngm-carousel mainClassName="teste6Carrousel" buttonsClassName="teste6CarrouselButtons" 
        [dataSource]="[
            'https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
            'https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
            'https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
            'https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
            'https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
            ]" 
        [slideTemplate]="slideTemplate7">
        <ng-template #slideTemplate7 let-imgurl="item">
        <img class="slide-image" [src]="imgurl" />
        </ng-template>
    </ngm-carousel>
```
