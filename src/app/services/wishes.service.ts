import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  lists: List[] = [];

  constructor() {
    this.loadLocalStorage();
  }

  createList(title: string) {
    const list = new List(title);
    this.lists.push(list);
    this.saveLocalStorage();
  }

  saveLocalStorage(): void {
    localStorage.setItem('data', JSON.stringify(this.lists));
  }

  loadLocalStorage(): void {
    if (localStorage.getItem('data')) {
      this.lists = JSON.parse(localStorage.getItem('data'));
    }
  }
}
