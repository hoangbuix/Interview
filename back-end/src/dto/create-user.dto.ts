export class CreateUserDto {
    readonly email: string;
    readonly username: string;
    readonly password: string;
    readonly majorId: string;
    readonly teacherId: string;
    readonly companyId: string;
    readonly topicId: string;
}