export class UpdateCompanyDto {
    readonly companyName: string;
    readonly mentorCompany: string;
    readonly description: string;
    readonly active?: boolean | true;
    readonly startDate: string;
    readonly endDate: string;
}