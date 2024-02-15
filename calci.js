let display = document.querySelector('.result');
      let calculationHistory = [];

      function clearDisplay() {
        display.textContent = '';
      }

      function appendNumber(number) {
        display.textContent += number;
      }

      function appendOperator(operator) {
        display.textContent += ' ' + operator + ' ';
      }

      function appendDecimal(decimal) {
        if (!display.textContent.includes(decimal)) {
          display.textContent += decimal;
        }
      }

      function deleteLast() {
        display.textContent = display.textContent.slice(0, -1);
      }

      function calculateResult() {
        try {
          const result = Function('"use strict";return (' + display.textContent + ')')();
          calculationHistory.push(display.textContent + ' = ' + result);
          display.textContent = result;
        } catch (error) {
          display.textContent = 'Error';
        }
      }