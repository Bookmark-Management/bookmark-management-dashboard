export class Card {
  public title: string;
  public image: string;
  public icon: string;
  public description: string;
  public createdDate: string;
  public createdBy: string;
  public longUrl: string;
  public shortUrl: string;
  public owners: Array<string>;
  public tinyCardsCount: number;
  public tinyCards: Array<Card>;
}
