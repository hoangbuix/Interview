export class UpdateTeacherDto {
    readonly teacherName: string;
    readonly role: string;
    readonly active: boolean | true;
    readonly updatedAt: Date;
}