<script setup>
import { NSlider } from "naive-ui";
</script>

<template>
  <NSlider v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NSlider>
</template>