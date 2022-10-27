// how to know if a variable is null & array

let arr = [1,2,"Aliasger",true,4,5]

if (arr === null) {
    console.log("This variable is a null")
    console.log(`The type of varibale is : ${typeof (arr)}`)
}
else if (typeof(arr)==='object' && arr == []){
    console.log("This is an empty array")
    console.log(`The type of varibale is : ${typeof (arr)}`)
}
else if (typeof (arr) === "object") {
    console.log("This is and array with below given values : ")
    console.log(arr)
    console.log(`The type of varibale is : ${typeof (arr)}`)
}
else {
    console.log("The variable is not an array or a null data type, please find the data type od variable below:")
    console.log(`The type of varibale is : ${typeof (arr)}`)
}