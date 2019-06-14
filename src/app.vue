<template>
  <div :class="$style.testA">
    testA
    <p :class="$style.test">testB</p>
  </div>
</template>

<script>
import { cube } from './vendor/math';
export default {
    mounted() {
        const a = 1;
        console.log(cube(a));
        console.dir(this.$style);
    },
};
</script>

<style module>
.testA {
    padding: 15px;
}
.testB {
    color: red;
}
</style>
