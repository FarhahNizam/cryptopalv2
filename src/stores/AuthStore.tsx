import { makeAutoObservable } from 'mobx';

class AuthStore {
  authUser = null;

  constructor() {
    makeAutoObservable(this);
  }

  setAuthUser(user: any) {
    this.authUser = user;
  }

  clearAuthUser() {
    this.authUser = null;
  }

  get isSignedIn() {
    return this.authUser !== null;
  }
}

export default AuthStore;
