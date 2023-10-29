// Count the odd numbers of an array using do-while

document.write("Count the odd numbers of an array usong do-while"+"<br>");
document.write("---------------------------------"+"<br>");

var a=[12,13,34,19,90,45,95];
var k=0;
document.write("The array elements are:"+a+"<br>");
document.write("The number of array elements are:"+a.length+"<br><br>");
document.write("The odd elements"+"<br>");
let i=0;
do{
    if(a[i]%2==1){
    let b=(a[i]);
       k++;
    document.write(b+"<br>");
    // document.write(x+"<br>");
    }
    i++;
    
}
while(i<a.length)
document.write("The count of odd elements :"+k+"<br>");


