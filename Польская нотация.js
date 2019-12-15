let result = '';
let stack = [];
let numeral = '0123456789'.split('');
let input = '(22*3)+1+(3*5)-1';
let expression = input + '=';
let operators = '+-*/()'.split('');
let parity = [];
parity['('] = 0;
parity[')'] = 1;
parity['+'] = 2;
parity['-'] = 2;
parity['*'] = 3;
parity['/'] = 3;
for (let i = 0; i < expression.length -1; i++){
  if (numeral.indexOf(expression[i]) != -1){
    result += expression[i];
    if (numeral.indexOf(expression[i+1]) == -1)
    result += ' ';
  } else {
  if (stack.length == 0){
    stack.push(expression[i]);
  } else {
  if (expression[i] == '('){
    stack.push(expression[i]);
  } else {
  if (expression[i] == ')'){
    while (stack[stack.length - 1] != '('){
      result += stack.pop();
    }
    stack.pop();
  } else {
  while (parity[stack[stack.length - 1]] >= parity[expression.charAt(i)])
			result += stack.pop();
      		stack.push(expression[i]);
        }
      }
    }
  } 
  if (expression[i+1] == '='){
    while (stack.length != 0)
    result += stack.pop();
  }
}
console.log(result);
//parity[expression[i]]
//parity[stack[stack.length - 1]]