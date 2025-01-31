<script setup>
import { NGlobalStyle } from "naive-ui";
</script>

<template>
  <NGlobalStyle v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NGlobalStyle>
</template>