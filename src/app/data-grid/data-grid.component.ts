import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatTableDataSource} from '@angular/material/table';
import { DataPostService } from '../services/data-post.service';
import { GetMoviesService } from '../services/get-movies.service';
import { UserData, UserColumns } from '../Utilities/userData';

/**
 * @title Table with selection
 */

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {
  displayedColumns: string[] = UserColumns.map((col) => col.key);
  columnsSchema: any = UserColumns;
  dataSource = new MatTableDataSource<any>();
  currSeats:number = 0;
  movieUserData:any;
  movieId: string = "";
  userId: string = "";
  index: number = 0;
  seatArr: any;
  putBody: any;

  constructor(private customerService: DataPostService, private movieService: GetMoviesService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.customerService.getCustomerData().subscribe((data: any) => {
      this.dataSource.data = data;
      console.log(this.dataSource.data);
    });
  }
  doneChange(event1: any){
    this.dataSource.data[parseInt(this.userId) - 1].seatAvl = this.dataSource.data[parseInt(this.userId) - 1].seatAvl + this.currSeats - event1.seat;
    this.dataSource.data[parseInt(this.userId) - 1].seatArray[this.index] = this.dataSource.data[parseInt(this.userId) - 1].seatAvl;
    this.dataSource.data[parseInt(this.userId) - 1].totalPrice = this.dataSource.data[parseInt(this.userId) - 1].singlePrice * event1.seat;
    this.putBody = {
      "seat":event1.seat,
      "seatAvl":this.dataSource.data[parseInt(this.userId) - 1].seatAvl,
      "seatArray":this.dataSource.data[parseInt(this.userId) - 1].seatArray,
      "totalPrice":this.dataSource.data[parseInt(this.userId) - 1].totalPrice
    }
    this.customerService.putCustomerData(this.userId, this.putBody).subscribe((data: any)=>{
      console.log(data);
    })
    this.movieService.updateData(this.putBody.seatArray, this.movieId).subscribe((data: any)=>{
      console.log(data);
    })
    this.snackBar.open("Updated Successfully!", "", {
      panelClass: 'center'
    });
    

        
  }
  valueChange(event: any)
  {
    this.currSeats = event.seat;
    this.userId = event.id;
    this.movieId = event.movieId;
    this.index = event.timing;   
  }
}
