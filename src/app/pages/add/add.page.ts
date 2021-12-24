import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListItem } from 'src/app/models/list-item.model';
import { List } from 'src/app/models/list.model';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage {

  list: List;
  description: string;

  constructor(
    private wishService: WishesService,
    private route: ActivatedRoute
    ) {
      const listId = this.route.snapshot.paramMap.get('listId');
      this.list = this.wishService.getList(listId);
  }

  addItem(): void {
    if (this.description?.length === 0) {
      return;
    }

    const listItem = new ListItem(this.description);
    this.list?.items?.push(listItem);
    this.wishService.saveLocalStorage();
    this.description = '';
  }

  deleteItem(index: number) {
    this.list?.items?.splice(index, 1);
    this.wishService.saveLocalStorage();
  }

  checkChange() {
    const totalPendingItems = this.list?.items?.filter((itemList) => !itemList?.isComplete)?.length;

    if (!totalPendingItems) {
      this.list.finishDate = new Date();
      this.list.isFinished = true;
    } else {
      this.list.finishDate = null;
      this.list.isFinished = false;
    }

    this.wishService.saveLocalStorage();
  }
}
