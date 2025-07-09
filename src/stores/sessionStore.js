import { makeAutoObservable } from "mobx";

class SessionStore {
  authUser = null;

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setAuthUser(authUser) {
    this.authUser = authUser;
  }
}

export default SessionStore;

