import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AttendanceService } from 'src/app/services/attendance.service';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {

  constructor(private attendanceService: AttendanceService, private activatedRoute: ActivatedRoute, private excelService:ExcelService) { 
    this.activatedRoute.queryParams.subscribe(data => {
      console.log(data.emp_id);
      this.fromRouter = data.emp_id;
    })
  }

  history: any = [];
  fromRouter: any;
  name: any;

  ngOnInit() {
    this.userHistory();
    
  }

  userHistory(): void {

    this.attendanceService.getAllOneId(this.fromRouter).subscribe(res =>{
      this.history = res;
      this.name = this.history[0].name;
    },err =>{
      console.log(err)
    });
  }

  goBack(): void {
    window.history.back();
  }

  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.history, 'employee_data');
  }
}
