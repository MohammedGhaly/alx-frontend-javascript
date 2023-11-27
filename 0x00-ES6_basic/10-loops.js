export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (let el of array) {
    el = appendString + el;
    arr.push(el);
  }
  return arr;
}
