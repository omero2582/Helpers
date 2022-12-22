const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const reverseString = (string) => {
  return [...string].reduce((sum, cur) => cur.concat(sum))
}

const calculator = () => {
  return {
    add (a, b) {
      return a + b
    },
    subtract (a, b) {
      return a - b
    },
    multiply (a, b) {
      return a * b
    },
    divide (a, b) {
      return a / b
    },
  }
}

const ceasarCipher = (string) => {
  return string.replace(/[a-zA-Z]/g, (char) => charCeasarShift(char))
}

const charCeasarShift = (char, num = 3) => {
  // A-Z = 65-90
  // a-z = 97-122
  let maxCharCode;
  let minCharCode;
  if (char.charCodeAt() <= 'Z'.charCodeAt()){
    maxCharCode = 'Z'.charCodeAt();
    minCharCode = 'A'.charCodeAt();
  }else{
    maxCharCode = 'z'.charCodeAt();
    minCharCode = 'a'.charCodeAt();
  }
  let newCharcode = (char.charCodeAt() + +num);
  newCharcode = newCharcode <= maxCharCode ? newCharcode : (newCharcode % maxCharCode) + (minCharCode - 1);
  return String.fromCharCode(newCharcode)
};

const analyzeArray = (array) => {
  // gets array of numbers and turns it into:
  // object == {
  //   average: ,
  //   min: ,
  //   max: ,
  //   length: 
  // };

  const newArray = array.reduce((total, cur) => {
    // return {
    //   sum: cur + (total.sum ?? 0),
    //   min: cur <= (total.min ?? cur) ? cur : total.min,
    //   max: cur >= (total.max ?? cur) ? cur : total.max,
    //   length: 1 + (total.length ?? 0),
    // }
    return {
      sum: cur + (total.sum ?? 0),
      min: Math.min(cur, (total.min ?? cur)),
      max: Math.max(cur, (total.max ?? cur)),
      length: 1 + (total.length ?? 0),
    }
  }, {})

  const { min, max, length, sum } = newArray;
  const average = sum / length;
  return {min, max, length, average}
};

export default calculator();
export { capitalize, reverseString, ceasarCipher, analyzeArray };