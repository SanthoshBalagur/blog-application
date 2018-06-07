import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';




@Injectable()
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  public BaseUrl ="https://blogapp.edwisor.com/api/v1/blogs"
  public authToken ="NzY1NjNkMjNlZjhlNTg2Y2E1ODliYzdiNzcwNDdjMGExMWYwNGQxNjQxZjNjMTVkODhiMDE4ZWNjOGU4NTc3M2M2ZGIwZDEwZDkzMGYyM2ZlYzIzOGI5NWMwMzZkNjVkNWM4ZTc5NjA4ZTY5NjhhY2RjMDUyMDJhZmMzY2U2MjUwZGVl"
  constructor(public _http :HttpClient) { 
    console.log("blog-http service was called")
   }
//method to return all the blogs
   public getAllBlogs():any{
     let myResponse = this._http.get(this.BaseUrl+'/all?authToken='+this.authToken);
     console.log(myResponse);
     return myResponse;
    }

}
