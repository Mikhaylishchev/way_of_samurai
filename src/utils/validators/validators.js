export const requiredField = value => {

    if(value) return undefined;

    return 'Field is empty';
    
}

export const maxLengthCrerator = (maxLength) => value => {
    
    if(value.length > maxLength) return `Value is too long. Max length is ${maxLength} symbols.`;

    return undefined;
}

export const minLengthCrerator = (minLength) => value => {
    
    if(value.length < minLength) return `Value is too short. Min length is ${minLength} symbols.`;

    return undefined;
}