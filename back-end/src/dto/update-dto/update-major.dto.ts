export class UpdateMajorDto {
    readonly majorName: string;
    readonly majorDescription: string;
    readonly teacherId: string;
    readonly userId: string;
    readonly classId: string;
    readonly active: boolean | true;
    readonly updatedAt: Date;
}