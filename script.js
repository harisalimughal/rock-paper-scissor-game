function getcomputerchoice(min, max){
    
    return Math.random() * (max - min) + min;   
}
let flag=true;
while(flag){
let number = getcomputerchoice(4,9);
let num=Math.floor(number)
if(num===4|| num===6 || num===8){
    console.log(num)
    flag=false
}

}