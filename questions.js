/** Q1
 * Assume you have the USD prices for this week from Saturday to Thursday
 * in contrast to the Iraqi Dinar as an array
 * arr = [150, 146, 142, 143, 145, 144]
 * calculate the max profit at which day you should buy at and what day should you sell at
 * for this example we buy at Monday an we sell at Wednesday
 */

function nameday(i){
return day=(i==0)? 'Saturday' : (i==1)? 'Sunday': (i==2)? 'Monday': (i==3)? 'Tuesday': (i==4)? 'Wednesday' : 'Thursday'} 

function bestProfit(arr){ 
  let index_buy_day , index_sell_day ;
  let buy_day = null , sell_day = null;
  let value = Math.max(... arr) - Math.min(... arr) ;
  for ( let var1 in arr){
      for ( let var2 in arr){
          if (arr[var2] - arr[var1] == value){
              index_buy_day = var1;
              index_sell_day = var2;
               }   }  } 
  buy_day = nameday(index_buy_day);
  sell_day = nameday(index_sell_day);
  
    let profit = value.toString();
    message = 'Buy day ' + buy_day + ' and sell day ' + sell_day + ' , best Profit = ' + profit;

    return message;
}

console.log(bestProfit([150, 146, 142, 143, 145, 144]));

/** Q2
 * assume you have two time periods
 * for example
 * period1 = 13/5/2021 01:00 to 14/5/2021 01:00
 * period2 = 15/5/2021 01:00 to 16/5/2021 01:00
 * write a function that tells us whether two given periods overlap or not
 * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "15/5/2021 13:00","16/5/2021 13:00" ) => no overlap
 * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "14/5/2021 13:00","16/5/2021 13:00" ) => overlap
 */

function CheckOverlap(t1Start, t1End, t2Start, t2End) {
    if ((t1Start <= t2End) && (t2Start <= t1End))
    {  return 'overlap' } else { return "no overlap"}
                    }
  console.log(
    CheckOverlap(
      "13/5/2021 13:00",
      "14/5/2021 13:00",
      "14/5/2021 13:00",
      "16/5/2021 13:00"
    )
  );

/** Q3
 * assume you have a shoes factory and the production lines produces shoes as follows
 * L R LL R R RR LL
 * write a function that takes these shoes as in a string
 * shoes = "RLRLRRLL"
 * then return how many pairs in it
 * result = 4
 * example HowManyPairs("RLRLRRLL") => 4
 * example HowManyPairs("RRLLRRRLLR") => 2
 */

function HowManyPairs(shoes) {
  let dict = {}
    for (let i=0; i<shoes.length; i++) {
  dict[shoes[i]]=dict[shoes[i]] + 1 || 1;}
      if(dict['R'] == dict['L']){
        return shoes.length /2
      }
  else {
  let c=Math.abs(dict['R']-dict['L'])
  return Math.floor((shoes.length-c)/2)-c}
}
console.log(HowManyPairs("RLRLRRLL"));

/** Q4
 *    Write a function that takes a string and return JSON of all the letters and its count. check the example to know more
 *    letterCount('abcac') => {a: 2, b: 1, c: 2}
 */

function HowManyLetters(word) {
    var dict = {}
    for (var i = 0; i < word.length; i++) {
        dict[word[i]] = dict[word[i]] + 1 || 1;
    }
    return dict;
}
console.log(HowManyLetters("kkssffoos"));


/** Q5
  * Create a function that takes an array of integers as an argument and returns the same array in ascending order. Using sort() would be easy, but for this challenge YOU have to sort the array creating your own algorithm.
 
 Examples
 sortArray([2, -5, 1, 4, 7, 8]) ➞ [-5, 1, 2, 4, 7, 8]
 
 sortArray([23, 15, 34, 17, -28]) ➞ [-28, 15, 17, 23, 34]
 
 sortArray([38, 57, 45, 18, 47, 39]) ➞ [18, 38, 39, 45, 47, 57]
 Notes
 The arrays can contain either positive or negative elements.
 The arrays will only contain integers.
 The arrays won't contain duplicate numbers.
 This is a challenge to enhance your ability, using the sort built-in won't enhance your skills.
  */
function sortArray(arr) { 
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++){
            if(arr[j] < arr[min]) {
                min=j;  } }
         if (min != i) {
             let tmp = arr[i]; 
             arr[i] = arr[min];
             arr[min] = tmp;      
        }
    } return arr;
}
console.log(sortArray([2, -5, 1, 4, 7, 8]))

/** Q6
  * Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 
 Examples
 minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 
 minMax([2334454, 5]) ➞ [5, 2334454]
 
 minMax([1]) ➞ [1, 1]
  */
function minMax(arr){
  min = Math.min(... arr);
  max = Math.max(... arr);
  return [min , max]
}
console.log(minMax([1]))


/** Q7
  * Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
 
 Examples
 missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
 
 missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
 
 missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
 Notes
 The array of numbers will be unsorted (not in order).
 Only one number will be missing.
  */
function missingNum(arr){
  for ( let i = 1; i <= 10; i++){
    if ( arr.indexOf(i) == -1)
      { return i ;}
  } 
}
console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]))

/** Q8
  * Write a function that accepts a positive integer between 0 and 999 inclusive and returns a string representation of that integer written in English.
 
 Examples
 numToEng(0) ➞ "zero"
 
 numToEng(18) ➞ "eighteen"
 
 numToEng(126) ➞ "one hundred twenty six"
 
 numToEng(909) ➞ "nine hundred nine"
 Notes
 There are no hyphens used (e.g. "thirty five" not "thirty-five").
 The word "and" is not used (e.g. "one hundred one" not "one hundred and one").
  */
function numToEng(number){
    const numbers1 = {
  '0':'zero','1':'one','2':'two', '3':'three','4':'four',
'5':'five','6':'six','7':'seven','8':'eight','9':'nine',
   '10':'ten','11':'eleven','12':'twelve','13':'thirteen', 
   '14':'fourteen', '15':'fifteen' ,'16':'sixteen','17':'seventeen',
 '18':'eighteen','19':'nineteen'};

const numbers2 = {'20':'twenty','30':'thirty','40':'forty', '50':'fifty','60':'sixty','70':'seventy','80':'eighty', '90':'ninety'}
if (number < 20) {
 let strnum = String(number)
return numbers1[strnum] 
  } else if (number < 100) {
  let rem = number %10 ;
  if (rem === 0){ 
  return numbers2[String(number)]
  } else {let strrem1 = String(rem);
  let num = Math.floor(number / 10)*10;    let strnum = String(num);
  let word = numbers2[strnum] +' ' + numbers1[strrem1];
  return word } }
else if (number < 1000) {
 let rem = number % 100;
  let strrem = numToEng(rem)
let strnum = numToEng(Math.floor(number / 100)) + ' hundred ';
 let word = strnum + strrem;
 return word ; }}

 console.log(numToEng(333))
