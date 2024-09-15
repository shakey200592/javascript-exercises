const palindromes = function (string) {
  const validChars = "abcdefghijklmnopqrstuvwxyz123456789";
  const cleanedString = string
    .toLowerCase()
    .split("")
    .filter((character) => validChars.includes(character))
    .join("");

  const reversedString = cleanedString.split("").reverse().join("");

  return cleanedString === reversedString ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
