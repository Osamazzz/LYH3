var str1= 'hello';
var str2='world';
str1= str1.replace(str1[0],str1[0].toUpperCase());
str2= str2.replace(str2[0],str2[0].toUpperCase());
console.log(str1+ '\xa0'+  str2);
// 输出：Hello World