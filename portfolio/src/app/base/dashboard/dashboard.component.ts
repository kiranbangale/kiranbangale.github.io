import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  myInfo: any[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.myInfo = data[1];
    });
  }
}
