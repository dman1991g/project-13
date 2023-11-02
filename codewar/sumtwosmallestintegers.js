function sumTwoSmallestNumbers(numbers) {  

  numbers = numbers.sort(function (a, b) { //the numbers in an array need to be sorted
    return a - b;
  });
  
  return numbers[0] + numbers[1];//once they are sorted then the first two numbers can be added together
};
