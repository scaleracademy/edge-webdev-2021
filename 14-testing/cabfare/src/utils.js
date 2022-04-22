
function calcFare(kms, mins) {
  kms = parseInt(kms);
  let result = 25;

  if (kms > 2) {
    result += ((kms - 2) * 10);
  }

  if (mins > 15) {
    result += ((mins - 15));
  }

  return result;
}

module.exports = {
  calcFare
};