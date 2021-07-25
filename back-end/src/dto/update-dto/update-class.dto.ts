export class UpdateClassDto {
    readonly className: string;
    readonly classDescription: string;
    readonly active: boolean | true;
    readonly updatedAt: Date;
}