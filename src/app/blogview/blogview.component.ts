import { Component, OnInit, OnDestroy } from '@angular/core';
import{ ActivatedRoute,Router} from '@angular/router'
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blogview',
  templateUrl: './blogview.component.html',
  styleUrls: ['./blogview.component.css']
})
export class BlogviewComponent implements OnInit,OnDestroy {
  //empty object
  public currentBlog;
 


  constructor(private _route:ActivatedRoute,private router: Router,public blogservice:BlogService ) {
    console.log("blogview Constructor is Called");
   }
     
  ngOnInit() {
    //getting the blog id from the route
    console.log(" blogview ngOnInit is called")
    let myBlogId =this._route.snapshot.paramMap.get('blogId');
  console.log(myBlogId);

  this.currentBlog =this.blogservice.getSingleBlogInformation(myBlogId);
  console.log(this.currentBlog);

  }
  ngOnDestroy(){
    console.log("blogview Destroy is called")
  }
 

}
