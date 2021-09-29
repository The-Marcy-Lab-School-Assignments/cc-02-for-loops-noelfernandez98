//1
function countToTen(){
    for(let i = 1; i < 11; i++){
    console.log(i)
    }
}
countToTen()

//2
function countFromOne(num){
    for(let i = 1; i <= num; i++){
  console.log(i)
}
}
countFromOne(5)

//3
function countEveryEven(num){
  for(let i = 2; i <= num; i+=2){
      console.log(i)
  }
}
countEveryEven(9)
//4
function countEveryOdd(num){
  for(let i = 1; i <= num; i+=2){
  console.log(i)
}
}
countEveryOdd(11)

//5 
function countEvens(num){
    let count = 0
    for (let i = 0; i < num.length; i++){
        if(num[i] % 2 === 0){
            count+=1
        }
}
  return count
}

console.log(countEvens([13,12,5,9,3,8,1,2]));