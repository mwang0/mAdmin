<template>
  <div :class="$style.testA">
    testA
    <p :class="$style.test">
      testB
    </p>
  </div>
</template>

<script>
export default {
    mounted() {
        const a = 1;
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
