import { Component, OnInit } from '@angular/core';
import { IBlog } from '../../shared/interfaces';
import { Blog } from '../../shared/classes';
import { BlogService } from '../../shared/services/blog.service';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.scss']
})
export class AdminBlogComponent implements OnInit {
  // blog
  blog: Array<IBlog>;
  blogId: number;
  blogDate: string;
  blogPicture: string;
  blogMessage: string;
  blogViewMore: string;
  constructor(private blogService: BlogService) {
    this.getBlog();
  }

  ngOnInit() {
  }
  // blog
  private getBlog(): void {
    this.blogService.getBlog().subscribe(
      data => {
        this.blog = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  public addBlogpost(): void {
    const newId = this.blog[this.blog.length - 1].id + 1;
    const newBlog = new Blog (newId, this.blogDate, this.blogPicture, this.blogMessage, this.blogViewMore);
    this.blogService.addBlogPost(newBlog).subscribe(() => {
      this.getBlog();
    });
    this.blogDate = '';
    this.blogPicture = '';
    this.blogMessage = '';
    this.blogViewMore = '';
  }
  public editBlogpost(blogpost: IBlog): void {
    document.getElementById('edittingMessage').style.display = 'flex';
    this.blogId = blogpost.id;
    this.blogDate = blogpost.date;
    this.blogPicture = blogpost.picture;
    this.blogMessage = blogpost.message;
    this.blogViewMore = blogpost.viewMore;
  }
  public saveBlogpost(): void {
    const newBlogpost = new Blog (
      this.blogId, this.blogDate, this.blogPicture, this.blogMessage, this.blogViewMore
    );
    this.blogService.updateBlog(newBlogpost).subscribe(() => {
      this.getBlog();
    });
    this.blogId = null;
    this.blogDate = '';
    this.blogPicture = '';
    this.blogMessage = '';
    this.blogViewMore = '';
  }
  public deleteBlogpost(blogpost: IBlog): void {
    const { id } = blogpost;
    this.blogService.delBlogPost(id).subscribe(() => {
      this.getBlog();
    });
  }
  closeEditWindow() {
    document.getElementById('edittingMessage').style.display = 'none';
  }
}
