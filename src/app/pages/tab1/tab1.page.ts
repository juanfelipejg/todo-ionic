import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
    private alert: AlertController,
  ) { }

  public async addList() {
    const alert = await this.alert.create({
      header: 'New list',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Name of list',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Create',
          handler: (data) => {
            if (data?.title?.length === 0) {
              return;
            }

            this.wishesService.createList(data?.title);
          },
        }
      ]
    });

    await alert.present();
  //this.router.navigateByUrl('tabs/tab1/add');
  }

}
