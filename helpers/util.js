export function capitalizeFirstLetter(data) {
    return data.charAt(0).toUpperCase() + data.slice(1);
}

export function removeSpaceChar(data){
    return data.toLowerCase().split(' ').join('-');
}