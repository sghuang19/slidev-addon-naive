<script setup>
import { NRadioButton } from "naive-ui";
</script>

<template>
  <NRadioButton v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NRadioButton>
</template>