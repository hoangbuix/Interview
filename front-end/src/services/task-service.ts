import useFetch from "../hooks/useFetch";

export const getTaskId = (id: string): Promise<ResGetTaskApi> =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const { data, error } = useFetch<Task>('http://localhost:9090' + `/task/get-task/${id}`);
            if (data) {
                resolve({
                    data: {
                        task: data
                    }, message: 'Get success!'
                })
            } else {
                reject(error);
            }
        }, 1000);
    });

