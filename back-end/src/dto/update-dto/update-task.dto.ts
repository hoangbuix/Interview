export class UpdateTaskDto {
    readonly taskId: string;
    readonly taskName: string;
    readonly title: string;
    readonly description: string;
    readonly active: boolean | true;
    readonly updatedAt: Date;
  }
  