import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {
  feedbacks: any;
  closeResult: string;
  feedbackForm: FormGroup;
  name = '';
  email = '';
  description = '';
  thumbsUp = false;
  useGoogleProfile = false;
  defaultProfilePic = '../../../assets/user.png';

  constructor(
    private dataService: DataService,
    private modalService: NgbModal,
    public afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.feedbackForm = new FormGroup({
      name: new FormControl(this.name, Validators.required),
      email: new FormControl(this.email, [
        Validators.required,
        Validators.email
      ]),
      description: new FormControl(this.description, Validators.required),
      thumbsUp: new FormControl(this.thumbsUp),
      useGoogleProfile: new FormControl(this.useGoogleProfile)
    });
    this.dataService.getData().subscribe(data => {
      this.feedbacks = data[0];
    });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  onSubmit() {
    const feedbackObj = this.feedbackForm.value;
    feedbackObj.date = Date.now();

    if (feedbackObj.useGoogleProfile) {
      return new Promise<any>((resolve, reject) => {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        this.afAuth.auth
          .signInWithPopup(provider)
          .then((res: any) => {
            resolve(res);
            feedbackObj.profilePictureUrl =
              res.additionalUserInfo.profile.picture;
            this.dataService.storeFeedback(feedbackObj);
          })
          .catch(rej => {
            console.log(rej);
          });
      });
    } else {
      feedbackObj.profilePictureUrl = '';
      this.dataService.storeFeedback(feedbackObj);
    }
    this.feedbackForm.reset();
  }
}
