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

  getList(id: number | string): List {
    const listId = Number(id);

    return this.lists?.find((list) => list?.id === listId);
  }

  createList(title: string): number {
    const list = new List(title);
    this.lists.push(list);
    this.saveLocalStorage();
    return list?.id;
  }

  deleteList(list: List): void {
    this.lists = this.lists.filter((listData) => listData?.id !== list?.id);
    this.saveLocalStorage();
  }

  saveLocalStorage(): void {
    localStorage.setItem('data', JSON.stringify(this.lists));
  }

  private loadLocalStorage(): void {
    if (localStorage.getItem('data')) {
      this.lists = JSON.parse(localStorage.getItem('data'));
    }
  }
}
