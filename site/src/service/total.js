export default function total(arr){
    let soma = 0;
    for(var i = 0; i < arr.length; i++) {
        soma += arr[i];
    }
    return soma;
}