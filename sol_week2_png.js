function rotation_array (arr,num){
    for (let i=0;i<num;i++){
    let number = arr[0];
    arr.shift();
    arr.push(number);
    }
    return arr;
}
arr2=rotation_array([1,2,3,4,5],4)
console.log(arr2)
