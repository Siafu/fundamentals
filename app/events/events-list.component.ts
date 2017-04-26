import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    template: `
     <div>
        <h1>Up coming Angular 2 Events </h1>
        <hr/>
       <div class="row">
         <div *ngFor="let event of events" class="col-md-5">
        <event-thumbnail (click) ="handleThumbnailClick(event.name)"  [event] ="event"></event-thumbnail>
         </div>
       </div> 
     </div>
    `
})
export class EventsListComponent implements OnInit {
    events:any
    constructor(private eventService: EventService, 
                private route:ActivatedRoute,
                private toastrService: ToastrService) {
     }
    ngOnInit() { 
        this.events = this.route.snapshot.data['events']
    }

    handleThumbnailClick(eventName) {
        this.toastrService.success(eventName);
    }
}