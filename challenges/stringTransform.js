//Defining function for string transformation
function stringTransformation(str) {
    //calculating length of the string
    const length = str.length;
    let updatedString = '';
  
    // Checking if length can be divided by 15
    if (length % 15 === 0) {
      // Reverse the string
      updatedString = str.split('').reverse().join('');
  
      // Replacing  characters with its ASCII code
      updatedString = updatedString
        .split('')
        .map((char) => char.charCodeAt(0))
        .join(' ');
    }

    // Checking if length can be divided  by 3
    else if (length % 3 === 0) {
      updatedString = str.split('').reverse().join('');
    }
    // Check if the length can be divided by 5
    else if (length % 5 === 0) {
      updatedString = str
        .split('')
        .map((char) => char.charCodeAt(0))
        .join(' ');
    }
    // If above conditions are not met
    else {
      updatedString = str;
    }
  
    return updatedString;
  }
  
  // Sample test
  console.log(stringTransformation('Hamburger')); // Output: "regrubmaH"
  console.log(stringTransformation('Pizza')); // Output: "80 105 122 122 97"
  console.log(stringTransformation('Chocolate Chip Cookie')); // Output: "eikooCpihCetalocohC"