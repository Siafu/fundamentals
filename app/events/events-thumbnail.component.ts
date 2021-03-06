import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'event-thumbnail',
    template: `<div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{event.name}}</h2>
    <div>Date: {{event.date}}</div>
    <div>Time: {{event.time}}</div>
    <div>Price: \${{event.price}}</div>
    <div>
        <span>Location: {{event.location.address}}</span>
        <span class="pad-left">{{event.location.city}}, 
        {{event.location.country}}</span>
    </div>
</div>
    `,
    styles:[`
            .pad-left {margin-left: 10px;}
            .well div {color: #bbb;}
            .thumbnail {min-height: 210px;}
    `]
})

export class EventThumbnailComponent implements OnInit {
    @Input() event: any
    constructor() { }
    ngOnInit() { }
    logFoo() {
        console.log('foo')
    }
}