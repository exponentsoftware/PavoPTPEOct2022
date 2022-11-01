// how to know if a variable is null & array this consider object also as array

let arr = [1, 2, "Aliasger", true, 4, 5]
value=arr instanceof Array

if (arr === null) {
    console.log("This variable is a null")
    console.log(`The type of varibale is : ${typeof (arr)}`)
}
else if (typeof(arr)==='object' && arr == [] && arr instanceof Array){
    console.log("This is an empty array")
    console.log(`The type of varibale is : ${typeof (arr)}`)
}
else if (typeof (arr) === "object" && arr instanceof Array) {
    console.log("This is an array with below given values : ")
    console.log(arr)
    console.log(`The type of varibale is : ${typeof (arr)}`)
}
else if (typeof (arr) === "object" && value===false) {
    console.log("This is an object with below given values : ")
    console.log(arr)
    console.log(`The type of varibale is : ${typeof (arr)}`)
}
else {
    console.log("The variable is not an array or a null data type, please find the data type od variable below:")
    console.log(`The type of varibale is : ${typeof (arr)}`)
}

// small
sample={name:"Aliasger"}
console.log(sample instanceof Array)