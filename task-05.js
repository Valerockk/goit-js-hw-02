const checkForSpam = function (message) {
  let string = message.toLowerCase();
  console.log(string);
  let result = false;

  while (string.includes("spam") || string.includes("sale")) {
    return (result = true);
  }
  return result;
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
