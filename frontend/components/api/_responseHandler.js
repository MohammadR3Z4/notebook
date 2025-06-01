
const responseHandler = response => {

    const data = response.data.data;
    delete response.data.data;
    let result = {
        httpCode: response.status,
        data: data
    };

    return result;
};

export default responseHandler;
