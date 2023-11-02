function sumTwoSmallestNumbers(numbers) {  

  numbers = numbers.sort(function (a, b) { // The numbers in the array need to be sorted smallest to largest
    return a - b;
  });
  
  return numbers[0] + numbers[1]; //once they are sorted then the first two numbers can be added together
};
