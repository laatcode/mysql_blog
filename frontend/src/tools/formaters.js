export const excerpt = (str, length) => {
    if(typeof str !== "string" || str.length === 0) {
        return ""
    }

    if(str.length <= length) {
        return str
    } else {
        return `${str.substring(0, length)}...`
    }

}