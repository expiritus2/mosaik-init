export function isSuccessfulResponse(meta) {
    return meta && meta.status >= 200 && meta.status < 300;
}

export function isFloatStr(str) {
    const floatRegex = /^-?\d+(?:[.]\d*?)?$/;
    if (!floatRegex.test(str)) return false;

    return !Number.isNaN(parseFloat(str));
}
