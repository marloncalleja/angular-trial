import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Comment } from './models/comment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SocialService {
  private ELEMENT_DATA_COMMENT: Comment[] = [
    { description: 'This is a comment' },
    { description: 'My name is Tom' },
    { description: 'My name is Jerry' },
  ];

  private _comments: BehaviorSubject<Comment[]>;

  private dataStore: {
    comments: Comment[];
  };

  constructor(private http: HttpClient) {
    this.dataStore = { comments: [] };
    this._comments = new BehaviorSubject<Comment[]>([]);
  }

  get comments(): Observable<Comment[]> {
    return this._comments.asObservable();
  }

  loadComments() {
    this.dataStore.comments = this.ELEMENT_DATA_COMMENT;
    this._comments.next(Object.assign({}, this.dataStore).comments);
  }
}
