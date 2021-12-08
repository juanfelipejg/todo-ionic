import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public wishesService: WishesService,
    private router: Router,
  ) { }

  public addList(): void {
    this.router.navigateByUrl('tabs/tab1/add');
  }

}
