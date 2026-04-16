function isSameType(value1, value2) {
  // true only if BOTH are NaN
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }

  // if one is NaN and other is not → false
  if (Number.isNaN(value1) || Number.isNaN(value2)) {
    return false;
  }

  // normal type check
  return typeof value1 === typeof value2;
}