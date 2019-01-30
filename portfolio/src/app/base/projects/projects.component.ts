import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  myProjects: any;
  defaultProjectImg = '../../../assets/defaultProjectImage.jpg';
  underDevelopmentImg = '../../../assets/underDevelopment.jpg';
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.myProjects = data[3];
    });
  }
}
