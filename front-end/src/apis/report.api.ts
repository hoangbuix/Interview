import api from "./api";

class ReportApi {

    async getAllReport() {
        return await api.get('/report/get-all');
    }
};

export default new ReportApi();