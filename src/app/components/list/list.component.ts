import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { List } from 'src/app/models/list.model';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() finishedPage: boolean;
  @ViewChild('list') list: IonList;

  constructor(
    public wishesService: WishesService,
    public router: Router,
    private alert: AlertController,
  ) { }

  ngOnInit() {}

  handleSelectedList(list: List): void {
    if (this.finishedPage) {
      this.router.navigateByUrl(`tabs/tab2/add/${list?.id}`);
    } else {
      this.router.navigateByUrl(`tabs/tab1/add/${list?.id}`);
    };
  }

  deleteList(list: List): void {
    this.wishesService.deleteList(list);
  }

  public async editList(list: List) {
    const alert = await this.alert.create({
      header: 'Edit list',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: list?.title,
          placeholder: 'Name of list',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.list.closeSlidingItems();
          }
        },
        {
          text: 'Accept',
          handler: (data) => {
            if (data?.title?.length === 0) {
              return;
            }

            list.title = data?.title;
            this.wishesService.saveLocalStorage();
            this.list.closeSlidingItems();
          },
        }
      ]
    });

    await alert.present();
  }
}
