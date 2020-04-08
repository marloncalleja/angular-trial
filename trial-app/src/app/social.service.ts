import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Comment } from './models/comment';
import { Event } from './models/event';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SocialService {
  private ELEMENT_DATA_COMMENT: Comment[] = [
    { description: 'This is a comment' },
    { description: 'My name is Marlon' },
    { description: 'My surname is Calleja' },
  ];

  private ELEMENT_DATA_EVENT: Event[] = [
    {
      description: 'This is an event',
      startDate: '01/02/20',
      endDate: '04/05/20',
    },
    {
      description: 'My name is Marlon',
      startDate: '01/02/20',
      endDate: '04/05/20',
    },
    {
      description: 'My surname is Calleja',
      startDate: '01/02/20',
      endDate: '04/05/20',
    },
  ];

  private _comments: BehaviorSubject<Comment[]>;
  private _events: BehaviorSubject<Event[]>;

  private dataStore: {
    comments: Comment[];
    events: Event[];
  };

  constructor(private http: HttpClient) {
    this.dataStore = { comments: [], events: [] };
    this._comments = new BehaviorSubject<Comment[]>([]);
    this._events = new BehaviorSubject<Event[]>([]);
  }

  get comments(): Observable<Comment[]> {
    return this._comments.asObservable();
  }

  get events(): Observable<Event[]> {
    return this._events.asObservable();
  }

  loadComments() {
    this.dataStore.comments = this.ELEMENT_DATA_COMMENT;
    this._comments.next(Object.assign({}, this.dataStore).comments);
  }

  loadEvents() {
    this.dataStore.events = this.ELEMENT_DATA_EVENT;
    this._events.next(Object.assign({}, this.dataStore).events);
  }

  addComment(comment: Comment) {
    this.ELEMENT_DATA_COMMENT.push(comment);
  }

  addEvent(event: Event) {
    this.ELEMENT_DATA_EVENT.push(event);
  }
}
