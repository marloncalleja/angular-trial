import { Component, OnInit } from '@angular/core';
import { SocialService } from '../social.service';
import { Comment } from '../models/comment';
import { Event } from '../models/event';
import { commentTypes } from '../constants';
import { CommentType } from '../models/comment-type';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.html',
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
