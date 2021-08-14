interface Report {
    _id: string;
    userId: string;
    teacherId: string;
    info: [
        {
            reportDate: Date;
            active: boolean;
            _id: string;
            reportName: string;
            meetId: string;
            content: [
                {
                    _id: string;
                    contentReport: string;
                    teacherRequest: string;
                    expectedContent: string;
                    image: string;
                }
            ]
        }
    ],
}

interface ResGetAllReportApi extends Res {
    data: {
        reports: Report[]
    }
}

interface ResGetAllReport extends ActionRedux {
    payload: ResGetAllReportApi
}

interface ResGetReportByIdApi extends Res {
    data: {
        report: Report
    }
}

interface ResGetReportById extends ActionRedux {
    payload: ResGetReportByIdApi
}