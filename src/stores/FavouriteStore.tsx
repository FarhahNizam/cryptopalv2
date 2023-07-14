import { action, computed, makeObservable, observable } from 'mobx';

class FavoriteStore {
  favorites: any[] = [];

  constructor() {
    makeObservable(this, {
      favorites: observable,
      addToFavorites: action,
      removeFromFavorites: action,
      isFavorite: observable,
    });
    this.loadFavorites();
  }

  addToFavorites(coinId: string) {
    if (!this.isFavorite(coinId)) {
      this.favorites.push(coinId);
      this.saveFavorites();
    }
  }

  removeFromFavorites(coinId: string) {
    const index = this.favorites.indexOf(coinId);
    if (index > -1) {
      this.favorites.splice(index, 1);
      this.saveFavorites();
    }
  }

  isFavorite(coinId: string) {
    return this.favorites.includes(coinId);
  }

  loadFavorites() {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      this.favorites = JSON.parse(storedFavorites);
    }
  }

  saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}

const favoriteStore = new FavoriteStore();
export default favoriteStore;
