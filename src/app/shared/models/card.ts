export class Card {
  public id: number;
  public title: string;
  public image: string;
  public icon: string;
  public description: string;
  public createdDate: string;
  public createdBy: string;
  public longUrl: string;
  public shortUrl: string;
  public groupName: string;
  public owners: Array<string>;
  public tinyCardsCount: number;
  public tinyCards: Array<Card>;
}
