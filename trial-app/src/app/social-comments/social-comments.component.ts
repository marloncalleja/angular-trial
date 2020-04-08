import { Component, OnInit } from '@angular/core';
import { SocialService } from '../social.service';
import { Comment } from '../models/comment';
import { Event } from '../models/event';
import { commentTypes } from '../constants';
import { CommentType } from '../models/comment-type';

@Component({
  selector: 'app-comment',
  template: `
    <form
      #commentForm="ngForm"
      (ngSubmit)="onSubmit(commentForm.value)"
      ngNativeValidate
    >
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          [(ngModel)]="description"
          required
        />
      </div>

      <button type="submit">Post</button>
    </form>
    <ul>
      <li *ngFor="let comment of comments">
        {{ comment.description }}
      </li>
    </ul>
  `,
})
export class CommentComponent implements OnInit {
  comments: Comment[] = [];
  description: string;

  constructor(public socialService: SocialService) {}

  ngOnInit() {
    this.socialService.comments.subscribe((data) => {
      this.comments = data;
    });

    this.socialService.loadComments();
  }

  onSubmit(data: Comment) {
    this.socialService.addComment(data);
  }
}

@Component({
  selector: 'app-event',
  template: `
    <form
      #commentForm="ngForm"
      (ngSubmit)="onSubmit(commentForm.value)"
      ngNativeValidate
    >
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          [(ngModel)]="description"
          required
        />
      </div>

      <div class="form-group">
        <label for="startDate">Start Date</label>
        <input
          type="text"
          id="startDate"
          name="startDate"
          [(ngModel)]="startDate"
          required
        />
      </div>

      <div class="form-group">
        <label for="endDate">End Date</label>
        <input
          type="text"
          id="endDate"
          name="endDate"
          [(ngModel)]="endDate"
          required
        />
      </div>

      <button type="submit">Post</button>
    </form>
    <ul>
      <li *ngFor="let event of comments">
        <span>{{ event.description }}</span>
        <p>Start: {{ event.startDate }} End: {{ event.endDate }}</p>
      </li>
    </ul>
  `,
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

@Component({
  selector: 'app-social-comments',
  templateUrl: './social-comments.component.html',
  styleUrls: ['./social-comments.component.css'],
})
export class SocialCommentsComponent implements OnInit {
  commentTypes: CommentType[];
  selectedCommentType = CommentComponent;

  ngOnInit() {
    this.commentTypes = Object.values(commentTypes);
  }

  changeComponent(type) {
    switch (type) {
      case 'text':
        this.selectedCommentType = CommentComponent;
        break;
      case 'event':
        this.selectedCommentType = EventComponent;
        break;
      default:
        this.selectedCommentType = CommentComponent;
    }
  }
}
