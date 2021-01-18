import { get } from 'lodash-es';
import * as toastr from 'toastr';

const loopErrors = (errors) => {
    if (errors && Array.isArray(errors)) {
        errors.forEach((error) => {
            toastr.error(error?.message);
        });
    }
};

export const showErrorMessage = (err) => {
    const axiosErrors = get(err, 'response.data.errors');
    if (axiosErrors) {
        loopErrors(axiosErrors);
        return;
    }

    const message = get(err, 'message');
    if (message) {
        toastr.error(message);
    }
};
