import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-blogview',
  templateUrl: './blogview.component.html',
  styleUrls: ['./blogview.component.css']
})
export class BlogviewComponent implements OnInit {
  //empty object
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


  constructor(private _route:ActivatedRoute,private router: Router) {
    console.log("Constructor is Called");
   }
     
  ngOnInit() {
    //getting the blog id from the route
    console.log("ngOnInit is called")
    let myBlogId =this._route.snapshot.paramMap.get('blogid');
  console.log(myBlogId);

  this.getSingleBlogInformation(myBlogId);

  }
  public getSingleBlogInformation(currentBlog):any{
    for(let blog of this.allBlogs){
      if(blog.blogid == currentBlog){
        this.currentBlog = blog;
      }
    }
  }

}
