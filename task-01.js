const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    const index = i + 1;
    console.log(`${index} - ${array[i]}`);
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
