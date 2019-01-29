import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class DataService {
  constructor(private db: AngularFireDatabase) {}

  getData() {
    return this.db.list('/data').valueChanges();
  }

  storeFeedback(feedback) {
    // createUser(value, avatar){
    //   return this.db.collection('users').add({
    //     name: value.name,
    //     nameToSearch: value.name.toLowerCase(),
    //     surname: value.surname,
    //     age: parseInt(value.age),
    //     avatar: avatar
    //   });
    // }

    return this.db.list('/data/feedbacks').push(feedback);

    // console.log(feedbackData);
    // const req = new HttpRequest(
    //   'PUT',
    //   'https://ng-recipe-book-3adbb.firebaseio.com/recipes.json',
    //   feedbackData
    // );
    // return this.httpClient.request(req);
  }
}
