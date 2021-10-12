let num: number = 123;
console.log(num);

interface LabelledValue {
  label: string;
}
function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
