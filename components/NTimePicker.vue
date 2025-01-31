<script setup>
import { NTimePicker } from "naive-ui";
</script>

<template>
  <NTimePicker v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NTimePicker>
</template>