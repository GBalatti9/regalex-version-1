export const includesSection = ( arr, str ) => {
    return arr.some(( element ) => Object.keys(element).includes(str));
}