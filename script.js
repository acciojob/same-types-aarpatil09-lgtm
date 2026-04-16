function isSameType(value1, value2) {
  // Convert to number if possible (since prompt gives string)
  let v1 = Number(value1);
  let v2 = Number(value2);

  // Check if both are NaN
  if (isNaN(v1) && isNaN(v2)) {
    return true;
  }

  // Check type normally
  return typeof v1 === typeof v2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));