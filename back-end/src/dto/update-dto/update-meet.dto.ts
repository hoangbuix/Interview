export class UpdateMeetDto {
    readonly meetId: string;
    readonly meetName: string;
    readonly description: string;
    readonly active: boolean | true;
    readonly updatedAt: Date;
}