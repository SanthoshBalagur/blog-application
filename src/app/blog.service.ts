import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public currentBlog;
  public allBlogs = [
    {
      "blogid":"1",
      "lastModified": "2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags":[],
      "author":"Admin",
      "category":"Comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 1 description",
      "title":"This is blog 1"
    },
    {
      "blogid":"2",
      "lastModified": "2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags":[],
      "author":"Admin",
      "category":"Comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 2 description",
      "title":"This is blog 2"
    },
    {
      "blogid":"3",
      "lastModified": "2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags":[],
      "author":"Admin",
      "category":"Comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 3 description",
      "title":"This is blog 3"
    },
  ]

  constructor() {
    console.log("Service Constructor is Called")
   }
   // method to return all the Blogs
    public getAllBlogs():any{
      return this.allBlogs;
    }
    public getSingleBlogInformation(currentBlogid):any{
      for(let blog of this.allBlogs){
        if(blog.blogid == currentBlogid){
          this.currentBlog = blog;
        } 
      }
      console.log(this.currentBlog);
      return this.currentBlog
    }
}
