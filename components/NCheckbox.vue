<script setup>
import { NCheckbox } from "naive-ui";
</script>

<template>
  <NCheckbox v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NCheckbox>
</template>