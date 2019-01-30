import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  myInfo: any;
  requestCV: false;
  closeResult: string;
  requestCvForm: FormGroup;
  name = '';
  email = '';
  description = '';
  staticAlertClosed = false;
  successMessage: string;
  alertMsg = {
    type: '',
    message: ''
  };

  private _alertMsg = new Subject<string>();

  constructor(
    private dataService: DataService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    setTimeout(() => (this.staticAlertClosed = true), 20000);
    this._alertMsg.subscribe(message => (this.alertMsg.message = message));
    this._alertMsg
      .pipe(debounceTime(5000))
      .subscribe(() => (this.alertMsg.message = null));

    this.requestCvForm = new FormGroup({
      name: new FormControl(this.name, Validators.required),
      email: new FormControl(this.email, [
        Validators.required,
        Validators.email
      ]),
      description: new FormControl(this.description, Validators.required)
    });

    this.dataService.getData().subscribe(data => {
      this.myInfo = data[1];
    });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  public changeSuccessMessage() {
    this._alertMsg.next(`Request sent successfully.`);
  }

  public changeErrorMessage() {
    this._alertMsg.next(`Something went wrong.`);
  }

  public alertMessage() {
    this._alertMsg.next(`Something went wrong.`);
  }

  onSubmit() {
    const cvRequestObj = this.requestCvForm.value;
    cvRequestObj.date = Date.now();

    this.dataService
      .requestCv(cvRequestObj)
      .then(data => {
        this.alertMsg.type = 'success';
        this.alertMsg.message = 'Request sent successfully.';
      })
      .catch(err => {
        this.alertMsg.type = 'danger';
        this.alertMsg.message = 'Something went wrong.';
      });

    this.alertMessage();
    this.requestCvForm.reset();
  }
}
