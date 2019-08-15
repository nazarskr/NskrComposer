import { Component } from '@angular/core';
import { BlogService } from '../../shared/services/blog.service';
import { IBlog } from '../../shared/interfaces';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  blog: Array<IBlog>;
  constructor(private blogService: BlogService) {
    this.getBlog();
  }

  getBlog() {
    this.blogService.getBlog().subscribe(
      data => {
        this.blog = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
