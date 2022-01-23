import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() finishedPage: boolean;

  constructor(
    public wishesService: WishesService,
    public router: Router,
  ) { }

  ngOnInit() {}

  handleSelectedList(list: List): void {
    if (this.finishedPage) {
      this.router.navigateByUrl(`tabs/tab2/add/${list?.id}`);
    } else {
      this.router.navigateByUrl(`tabs/tab1/add/${list?.id}`);
    };
  }

}
