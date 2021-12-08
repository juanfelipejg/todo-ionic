import { ListItem } from './list-item.model';

export class List {

  id: number;
  title: string;
  creationDate: Date;
  finishDate: Date;
  isFinished: boolean;
  items: ListItem[];

  constructor(title: string) {
    this.title = title;
    this.creationDate = new Date();
    this.isFinished = false;
    this.items = [];
    this.id = new Date().getTime();
  }
}
