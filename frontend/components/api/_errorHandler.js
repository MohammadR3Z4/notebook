// import { toastIt } from ;

const errorHandler = (error) => {

    let result = {
        httpCode: error === undefined ? 500 : error.status,
        data: error === undefined ? {
            'message': {
                'text': 'Internal Server Error'
            }
        } : error.data.message
    };

    if (result.data.message) {
        result.data.message = {text: result.data.message};
    }

    switch (result.httpCode) {
        case 500:
            if (error === undefined) {
                // router.push({
                //     pathname: path.page500,
                //     state: result
                // });
            } else {
                // toastIt((result['message']), 'danger');
                console.log(result['message'])
            }
            break;
        case 422:
            return result
        case 451:
            return result;
        case 404:
            return result;
        case 429:
            // toastIt(('backendMessages.tooManyRequests'), 'danger');
            console.log("tooManyRequests")
            return result;
        case 401:
            return result
        default :
            return result;
    }

    return result;
};

export default errorHandler;
