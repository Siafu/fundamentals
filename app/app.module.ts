import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { EventsAppComponent } from "./events-app.component";
import { EventsListComponent } from "./events/events-list.component";
import { CreateEventComponent } from "./events/create-event.component";
import { EventThumbnailComponent } from "./events/events-thumbnail.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { Error404Component } from "./errors/404.component";
import { NavBarComponent } from "./nav/navbar.component";
import { EventService } from "./events/shared/event.service";
import { ToastrService } from "./common/toastr.service";
import { appRoutes } from './routes';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolverService } from './events/events-list-resolver.service';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [EventsAppComponent, 
                   EventsListComponent, 
                   CreateEventComponent,
                   Error404Component,
                   EventThumbnailComponent, 
                   EventDetailsComponent, 
                   NavBarComponent],
    bootstrap: [EventsAppComponent],
    providers: [EventService,
                EventListResolverService, 
                ToastrService, 
                { provide: 'canDeactivateCreateEvent', 
                    useValue: checkDirtyState
                },
                EventRouteActivator]
})
export class AppModule {

}

function checkDirtyState(component:CreateEventComponent){
    if (component.isDirty) {
       return  window.confirm('You have not saved this event, do you really want to cancel')
    }
    return true
}