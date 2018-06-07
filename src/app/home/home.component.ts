import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy {

 public allBlogs;

  constructor(public blogservice:BlogService,public blogHttpService:BlogHttpService) {
    console.log("Constructor is called")
   }

  ngOnInit() {
    console.log(" Home Component ngOninit is called")
    this.allBlogs = this.blogHttpService.getAllBlogs();
   
    // this.allBlogs = this.blogservice.getAllBlogs()
    // console.log(this.allBlogs);
  }
  ngOnDestroy() {
    console.log("Destroy is called")
  }

}
