export class CreateLogDto {
  readonly userId: string;
  readonly url: string;
  readonly method: string;
  readonly from: string;
  readonly at: Date;
}