<script setup>
import { NRadioGroup } from "naive-ui";
</script>

<template>
  <NRadioGroup v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NRadioGroup>
</template>