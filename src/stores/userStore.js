import { makeAutoObservable } from "mobx";

class UserStore {
  users = {};

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setUsers(users) {
    this.users = users;
  }
}

export default UserStore;

