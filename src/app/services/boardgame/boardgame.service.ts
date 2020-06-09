import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Boardgame } from 'src/app/models/boardgame';

@Injectable({
  providedIn: 'root',
})
export class BoardgameService {
  constructor(private afs: AngularFirestore) {}

  get(id) {
    return this.afs.doc('boardgames/' + id).valueChanges();
  }

  getByName(name) {
    return this.afs
      .collection('boardgames', (ref) => ref.where('name', '==', name).limit(1))
      .snapshotChanges();
  }

  list() {
    return this.afs.collection('boardgames').valueChanges();
  }

  create(boardgame: Boardgame) {
    // TODO: Get id user
    // this.storage.get('userId').then((userId) => {
    this.afs
      .collection('boardgames')
      .add(boardgame)
      .then((result) => {
        // TODO: Save new boardgame in array de bg in doc user
        // this.afs
        //   .doc(`users/${userId}`)
        //   .update({
        //     boardgames: firestore.FieldValue.arrayUnion(result.id),
        //   })
        //   .then(() => {
        //     // TODO: REDIR
        //   });
      });
    // });
  }
}
