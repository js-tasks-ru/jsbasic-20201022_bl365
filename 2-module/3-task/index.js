let calculator = {
  // ваш код
  read: function(a, b)  {
    calculator.a = a; calculator.b = b;
  },

  sum: function() {
    return calculator.a + calculator.b;
  },

  mul: function() {
    return calculator.a * calculator.b;
  }
};
print(calculator)

function print(text) {console.log(text)}
// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
