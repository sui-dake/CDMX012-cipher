const cipher = {
  // a = offset num
  // b = charaASCII
  encode: function (a, b) {
    let i = 0;
    let resulta = "";
    while (i < b.length) {
      let chara = b.slice(i, i + 1);
      let charaASCII = Number(chara.charCodeAt());

      if (charaASCII != 32) {


        let formula = ((charaASCII - 65) + a) % 26 + 65
        if (formula < 65) {
          formula = formula + 26
        }

        let newChara = String.fromCharCode(formula);

        resulta += newChara
        i++
        console.log(resulta)




      } else {

        let newChara = ' ';
        resulta += newChara
        i++

        if (i == b.length) {
          document.getElementById().innerHTML = resulta
        }
      }
    }
    if (a === 0 || a === null) {
      throw new TypeError()
    }
    return resulta
  },



  // s = offset2
  // t = charaASCII
  decode: function (s, t) {
    let j = 0;
    let resulta = "";
    while (j < t.length) {
      let chara = t.slice(j, j + 1);
      let charaASCII = Number(chara.charCodeAt());
      if (charaASCII != 32) {
        let formula = ((charaASCII - 65) - s) % 26 + 65
        if (formula < 65) {
          formula = formula + 26
        }

        let newChara = String.fromCharCode(formula);

        resulta += newChara
        j++
        console.log(resulta)
      } else {
        let newChara = ' ';
        resulta += newChara
        j++

        if (j == t.length) {
          document.getElementById().innerHTML = resulta
        }
      }
    }
    if (s === 0 || s === null) {
      throw new TypeError()
    }
    return resulta
  },
};

export default cipher;


