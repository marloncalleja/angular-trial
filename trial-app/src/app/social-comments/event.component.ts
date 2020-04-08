import { Component, OnInit } from '@angular/core';
import { SocialService } from '../social.service';
import { Event } from '../models/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.html',
})
export class EventComponent implements OnInit {
  comments: Event[] = [];
  description: string;
  startDate: string;
  endDate: string;

  constructor(public socialService: SocialService) {}

  ngOnInit() {
    this.socialService.events.subscribe((data) => {
      this.comments = data;
    });

    this.socialService.loadEvents();
  }

  onSubmit(data: Event) {
    this.socialService.addEvent(data);
  }
}
