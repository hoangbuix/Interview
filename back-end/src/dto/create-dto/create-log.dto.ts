export class CreateLogDto {
    readonly api: string;
    readonly method: string;
    readonly from: string;
    readonly at: Date;
  }