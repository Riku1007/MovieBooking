import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataPostService } from '../services/data-post.service';
import { GetMoviesService } from '../services/get-movies.service';
import { Movies } from '../Utilities/movieDatas';
import { FormData } from '../Utilities/formData';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  formDatas: any;
  data: any;
  body:any=[];
  postData:any=[];

  constructor(private router:Router,private service: GetMoviesService, private postService: DataPostService) {
    this.formDatas = this.router.getCurrentNavigation()?.extras.state;
    this.data = this.formDatas.data;
    this.body=[this.data.seatArray[0],this.data.seatArray[1],this.data.seatArray[2]];
    this.body[this.data.timing]=this.data.seatAvl;
    this.data.seatArray[this.data.timing]=this.data.seatAvl;
    console.log(this.data);
    
   }

  ngOnInit(): void {
    this.service.updateData(this.body,this.data.movieId).subscribe((data:Movies[])=>{
      console.log(data);
    });
    this.postService.postData(this.data).subscribe((data:FormData[])=>{
      console.log(data);
    })
  }

}
