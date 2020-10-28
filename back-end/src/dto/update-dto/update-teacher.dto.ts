export class UpdateTeacherDto {
    readonly teacherId: string;
    readonly teacherName: string;
    readonly active: boolean | true;
    readonly updatedAt: Date;
}