// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
function consecutive(array) {
  var i = 2,
    d;
  while (i < array.length) {    
    d = array[i - 1] - array[i - 2];
    console.log([array[i - 1], array[i - 2, d]);
    if (Math.abs(d) === 1 && d === array[i] - array[i - 1]) {
      //return false;
    }
    i++;
  }
  return true;
}

document.write(consecutive([1]) + '<br>'); // true
document.write(consecutive([2, 4, 6]) + '<br>'); // true
document.write(consecutive([9, 8, 7]) + '<br>'); // false
document.write(consecutive([1, 2, 3, 6, 7]) + '<br>'); // false
document.write(consecutive([1, 2, 3, 4, 5]) + '<br>'); // false
