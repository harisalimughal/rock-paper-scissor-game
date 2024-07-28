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
    else if (num==5){
        console.log('📄')
        flag=false
    }
    else if(num==8){
        console.log('✂️');
        flag=false
    }
    


}

function gethumanchoice(){
    let sign = prompt("Enter 4 for Rock, 5 for Paper, 8 for Scissor  ");

    if(sign===4){
        console.log('🥌')
               }
        else if (sign==5){
            console.log('📄')
        }
        else if(sign==8){
            console.log('✂️');
        }
}

gethumanchoice();