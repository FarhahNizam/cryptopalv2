import { action, computed, makeObservable, observable } from 'mobx';
import favoriteStore from '../stores/FavouriteStore';

class AuthStore {
  authUser: any = null;
  username: any;
  isModalOpen = false;
  favoriteStore = favoriteStore;
  uid: string | null = null;

  constructor() {
    makeObservable(this, {
      authUser: observable,
      setAuthUser: action,
      clearAuthUser: action,
      isSignedIn: computed,
      isModalOpen: observable,
      openModal: action,
      closeModal: action,
      handleSignInSuccess: action,
      favoriteStore: observable,
      uid: observable,
    });
    this.loadAuthUser();
  }

  setAuthUser(user: any) {
    this.authUser = user;
    this.username = user.username; // Store the username separately
    localStorage.setItem('authUser', JSON.stringify(user));
    this.uid = user?.uid; // Update the UID property
  }

  clearAuthUser() {
    this.authUser = null;
    localStorage.removeItem('authUser');
    this.uid = null; // Clear the UID property
  }

  loadAuthUser() {
    const authUser = localStorage.getItem('authUser');
    if (authUser) {
      this.authUser = JSON.parse(authUser);
      this.uid = this.authUser?.uid; // Load the UID from the stored user
    }
  }

  get isSignedIn() {
    return this.authUser !== null;
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  handleSignInSuccess() {
    this.closeModal();
  }
}

const authStore = new AuthStore();
export default authStore;
