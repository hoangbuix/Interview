export class UpdateMajorDto {
    readonly majorId: string;
    readonly majorName: string;
    readonly majorDescription: string;
    readonly active: boolean | true;
    readonly updatedAt: Date;
}