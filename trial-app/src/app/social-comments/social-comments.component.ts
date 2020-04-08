import { Component, OnInit } from '@angular/core';
import { commentTypes } from '../constants';
import { CommentType } from '../models/comment-type';
import { CommentComponent } from './comment.component';
import { EventComponent } from './event.component';

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
