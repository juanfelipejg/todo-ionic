export class ListItem {

  description: string;
  isComplete: boolean;

  constructor(description: string) {
    this.description = description;
    this.isComplete = false;
  }
}
