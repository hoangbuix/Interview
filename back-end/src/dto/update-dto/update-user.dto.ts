export class UpdateUserDto {
    readonly fullName: string;
    readonly avatar: string;
    readonly gender: string;
    readonly birthday: string;
    readonly address: string;
    readonly phone: string;
    readonly email: string;
    readonly username: string;
    readonly password: string;
    readonly active: boolean;
    readonly updatedAt: Date;
}