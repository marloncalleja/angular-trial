import { Component, OnInit } from '@angular/core';
import { SocialService } from '../social.service';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-social-comments',
  templateUrl: './social-comments.component.html',
  styleUrls: ['./social-comments.component.css'],
})
export class SocialCommentsComponent implements OnInit {
  comments: Comment[] = [];
  description: string;

  constructor(private socialService: SocialService) {}

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
