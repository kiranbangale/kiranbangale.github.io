import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/data.service';
import * as firebase from 'firebase';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  dataObj;

  constructor(dataService: DataService) {
    this.dataObj = dataService.getData();
  }

  ngOnInit() {}
}
