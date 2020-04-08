import { Component, OnInit } from '@angular/core';
import { SocialService } from '../social.service';
import { Comment } from '../models/comment';

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
