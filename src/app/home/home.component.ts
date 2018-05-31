import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //declare a dummy blog variable here 
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

  constructor() { }

  ngOnInit() {
    
  }

}
