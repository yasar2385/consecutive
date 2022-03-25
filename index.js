// Import stylesheets
import './style.css';

// Write Javascript code!

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
console.log('d,i');
function consecutive(array) {
  var i = 2,
    d;
  console.log(d, i);
  while (i < array.length) {
    d = array[i - 1] - array[i - 2];
    console.log([array[i - 2], array[i - 1], d]);
    if (Math.abs(d) === 1 && d === array[i] - array[i - 1]) {
      return false;
    }
    i++;
  }
  return true;
}
appDiv.append(consecutive([1]) + '||'); // true
appDiv.append(consecutive([2, 4, 6]) + '||'); // true
appDiv.append(consecutive([9, 8, 7]) + '||'); // false
appDiv.append(consecutive([1, 2, 3, 6, 7]) + '||'); // false
appDiv.append(consecutive([1, 2, 3, 4, 5]) + '||'); // false
