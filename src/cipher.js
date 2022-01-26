const cipher = {
    // a = offset num
    // b = charaASCII
  encode: function (a, b) {
    let formula = ((b - 65) + a) % 26 + 65
    if (formula < 65) {
     
      formula = formula + 26
    }
    return formula
  },
// t = charaASCII
// s = offset2
  decode: function (s, t) {
    let formula = ((t - 65) - s) % 26 + 65
    if (formula < 65) {

      formula = formula + 26
    }
    return formula
  },
};

export default cipher;


