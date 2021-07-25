export class UpdateMeetDto {
    readonly meetName: string;
    readonly description: string;
    readonly active: boolean | true;
    readonly updatedAt: Date;
}