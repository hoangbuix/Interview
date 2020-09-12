export class CreateReportDto {
    readonly userId: string;
    readonly teacherId: string;
    readonly topicId: string;
    readonly meetId: string;
    readonly companyId: string;
    readonly contentReport: string;
    readonly teacherRequest: string;
    readonly expectedContent: string;
    readonly image: string;
    readonly reportName: string;
    readonly reportDate: Date;
}