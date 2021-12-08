import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  lists: List[] = [];

  constructor() {
    const list1 = new List('Get infinite stocks');
    const list2 = new List('Get became super sayayin');

    this.lists.push(list1, list2);
  }
}
