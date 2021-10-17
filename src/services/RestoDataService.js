import firebase from "../firebase";

const db = firebase.ref("/list");

class RestoDataService {
  getAll() {
    return db;
  }

  create(resto) {
    return db.push(resto);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new RestoDataService();