import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NumberVerService } from '../services/number-ver.service';
import { FormData } from '../Utilities/formData';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {
  id: any;
  product: any;
  data: any;
  yourModel: number = -1;
  seats: number = 0;
  verify: boolean = true;
  data1: string = "";
  data2: string = "";
  data4: number = 0;
  data5: number = 0;
  data6: number = 0;
  data7: string = "";
  dummy: FormData = {
    movieId: '',
    name: '',
    email: '',
    mob: 0,
    dob: '',
    gender: '',
    timing: 0,
    seat: 0,
    totalPrice: 0,
    singlePrice: 0,
    seatAvl: 0,
    trailerUrl:"",
    movieName:"",
    imageUrl:"",
    seatArray:[],
    timingArray:["Morning", "Noon", "Evening"],
  };



  constructor(private router: Router, private numVer: NumberVerService) {
    this.product = this.router.getCurrentNavigation()?.extras.state;
    this.data = this.product.data;
  }

  ngOnInit() {

  }

  onChange(event: any): void {
    this.yourModel = parseInt(event.target.value);
  }
  mobCheck(event: any) {
    this.numVer.myMethod(event.target.value);
    // this.numVer.verifyNumber().subscribe((data: any) => {
    //   if(data.valid)
    //   this.verify = true;
    //   else
    //   this.verify = false;
    // });
  }
  checkValidation(): boolean {
    if ((this.data1.length > 0 && this.data2.length > 0 && this.yourModel > -1 && this.data4 > 0 && this.data5 > 0 && this.data6 > 0 && this.data7.length > 0 && this.verify && this.seats > 0 && this.seats < this.data.Seats[this.yourModel] + 1)) {
      this.dummy.movieId = this.data.id;
      this.dummy.name = this.data1;
      this.dummy.email = this.data2;
      this.dummy.mob = 916371915498;
      this.dummy.dob = this.data4 + "-" + this.data5 + "-" + this.data6;
      this.dummy.gender = this.data7;
      this.dummy.timing = this.yourModel;
      this.dummy.seat = this.seats;
      this.dummy.seatAvl = this.data.Seats[this.yourModel] - this.seats;
      this.dummy.singlePrice = this.data.Price[this.yourModel];
      this.dummy.totalPrice = this.dummy.singlePrice * this.seats;
      this.dummy.trailerUrl = this.data.Trailer;
      this.dummy.movieName = this.data.Movie_name;
      this.dummy.imageUrl = this.data.Image;
      this.dummy.seatArray=this.data.Seats;
    }
    return (this.data1.length > 0 && this.data2.length > 0 && this.yourModel > -1 && this.data4 > 0 && this.data5 > 0 && this.data6 > 0 && this.data7.length > 0 && this.verify && this.seats > 0 && this.seats < this.data.Seats[this.yourModel] + 1);
  }
}
