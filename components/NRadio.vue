<script setup>
import { NRadio } from "naive-ui";
</script>

<template>
  <NRadio v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NRadio>
</template>