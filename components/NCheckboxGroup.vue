<script setup>
import { NCheckboxGroup } from "naive-ui";
</script>

<template>
  <NCheckboxGroup v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NCheckboxGroup>
</template>