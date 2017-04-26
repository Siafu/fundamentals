import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'events-list',
    template: `
    <div>
        <h1>Up coming Angular 2 Events </h1>
        <hr/>
        <div class ="well hoverwell thumbnail">
          <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        <div>
            <span>Location: {{event.location.address}}</span>
            <span>&nbsp;</span>
            <span>{{event.location.city}}, {{event.location.country}}</span>
        </div>
    </div>
    </div>
    `
})
export class EventsListComponent implements OnInit {
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2014',
        time: '10:00 am',
        price: 799.99,
        imageUrl: '/app/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'New York',
            country: 'USA'
        }
    }
    constructor() { }

    ngOnInit() { }
}