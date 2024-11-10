'use strict'

let count=0;
while(count<5){
  console.log(count);
  count++; //while문이 빠져나올 수 있도록 해야 함.
}

let number=0;
do{
  console.log(number);
  number++;
}while(number<5);