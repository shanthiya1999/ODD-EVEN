let num=[3,5,6,8,12,15,7];
console.log(num.length);
console.log("Original array",num)
let evenarry=[];
let oddarry=[];
function even(arry){
    for(i=0;i<arry.length;i++){
       
       if( arry[i]%2==0){
        evenarry.push(arry[i])
        
       }
       else if(arry[i]%2 != 0){
       oddarry.push(arry[i])
       
       }
    }
    console.log("Even numbers array",evenarry)
    console.log("ODD Numbers in the array ",oddarry)
}
(even(num))