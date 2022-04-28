var large = [0];
var small = [0];
for(i=1;i<=10;i++)
arr[i]= Math.floor(100 + Math.random() * 899);
if ((arr[i] > large)){
 console.log("large:"+arr[i]);
}
else if ((arr[i] < small )){
console.log ("small:"+arr[i]);
}