<script setup>
import { ref, reactive, computed } from "vue";
// import WelcomeItem from "./WelcomeItem.vue";
// import DocumentationIcon from "./icons/IconDocumentation.vue";
// import ToolingIcon from "./icons/IconTooling.vue";
// import EcosystemIcon from "./icons/IconEcosystem.vue";
// import CommunityIcon from "./icons/IconCommunity.vue";
// import SupportIcon from "./icons/IconSupport.vue";

const consoles = () => {
  const text = getText.value;
  const offset = getNumber.value;
  console.log("TEXT", text), console.log("NUMBER", offset);
  let ciphered = "";
  for (let i = 0; i < text.length; i++) {
    let chara = text.slice(i, i + 1);
    let charaASCII = Number(chara.charCodeAt());

    if (charaASCII != 32) {
      let formula = ((charaASCII - 65 + offset) % 26) + 65;
      if (formula < 65) {
        formula = formula + 26;
      }

      let newChara = String.fromCharCode(formula);

      ciphered += newChara;
      console.log(ciphered);
    } else {
      let newChara = " ";
      ciphered += newChara;
    }
  }
  return ciphered;
};
const getText = ref("");
const getNumber = ref(0);
</script>

<template>
  <body>
    <label
      >Choose the number that will determinate the ciphering:
      <input v-model="getNumber" type="number" />
    </label>
    <section>
      <p>Message:</p>
      <textarea v-model="getText"></textarea>
      <button @click="consoles">Cipher</button>
      <p v-if="getText">{{ consoles() }}</p>
    </section>
  </body>
</template>

<style scoped>
body {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
section {
  margin-top: 20px;
}
</style>
