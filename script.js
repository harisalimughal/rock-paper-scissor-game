function getcomputerchoice(min, max){
    
    return Math.random() * (max - min) + min;   
}
let flag=true;
while(flag){
let number = getcomputerchoice(4,9);
let num=Math.floor(number)
if(num===4){
    console.log('🥌')
    flag=false
           }
    else if (num==6){
        console.log('📄')
        flag=false
    }
    else if(num==8){
        console.log('✂️');
        flag=false
    }
    


}

function gethumanchoice(){

}