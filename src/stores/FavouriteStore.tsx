import { action, computed, makeObservable, observable } from 'mobx';

export interface CoinDetails {
  coinId: string;
  name: string;
  fullName: string;
  price: string;
  imageurl:string;
  changepct:number;
  // Add other properties as needed
}

class FavoriteStore {
  favorites: CoinDetails[] = [];

  constructor() {
    makeObservable(this, {
      favorites: observable,
      addToFavorites: action,
      removeFromFavorites: action,
      isFavorite: computed,
    });
    this.loadFavorites();
  }

  addToFavorites(coinDetails: CoinDetails) {
    if (!this.isFavorite(coinDetails.coinId)) {
      this.favorites.push(coinDetails);
      this.saveFavorites();
    }
  }

  removeFromFavorites(coinId: string) {
    const index = this.favorites.findIndex((coin) => coin.coinId === coinId);
    if (index > -1) {
      this.favorites.splice(index, 1);
      this.saveFavorites();
    }
  }

  get isFavorite() {
    return (coinId: string) => {
      return this.favorites.some((coin) => coin.coinId === coinId);
    };
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