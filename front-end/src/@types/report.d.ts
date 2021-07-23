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

interface ResGetReportApi extends Res {
    data: {
        report: Report
    }
}

interface ResGetReport extends ActionRedux {
    payload: ResGetUserIdApi
}