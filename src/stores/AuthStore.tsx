import { action, computed, makeAutoObservable, makeObservable, observable } from 'mobx';

class AuthStore {
  authUser = null;
  username: any;

  constructor() {
    makeObservable(this, {
      authUser: observable,
      setAuthUser: action,
      clearAuthUser: action,
      isSignedIn: computed,
    });
    this.loadAuthUser();
  }

  setAuthUser(user:any) {
    this.authUser = user;
    localStorage.setItem('authUser', JSON.stringify(user));
  }

  clearAuthUser() {
    this.authUser = null;
    localStorage.removeItem('authUser');
  }

  loadAuthUser() {
    const authUser = localStorage.getItem('authUser');
    if (authUser) {
      this.authUser = JSON.parse(authUser);
    }
  }

  get isSignedIn() {
    return this.authUser !== null;
  }

  

  
}

const authStore = new AuthStore();
export default authStore;
