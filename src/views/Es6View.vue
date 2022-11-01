<template>Es6View</template>

<script>
export default {
  name: "Es6View",
};
const SETTING = {
  name: "mohamed",
  age: 36,
};
SETTING.name = "sayed";

console.log(SETTING);
let myarray = [1, 2, 3, 4, 2, 5, 6, 7, 2, 3];
let myset = new Set(myarray);
console.log(myset);
</script>

<style></style>
