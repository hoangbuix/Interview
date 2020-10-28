export class CreateCompanyDto {
    readonly companyName: string;
    readonly mentorCompany: string;
    readonly description: string;
    readonly startDate: string | Date;
    readonly endDate: string | Date;
}