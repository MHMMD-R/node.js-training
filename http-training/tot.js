/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    var xR=x.toString().split('').reverse().join('');
//     const s=[] ;
//     while(x>0){
// s.unshift(Math.floor(x %10))
// x=Math.floor(x/10)}
// const sR=s.toReversed()
var res=(xR==x)
return res;
    
};
console.log(isPalindrome(113));