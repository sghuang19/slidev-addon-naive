<script setup>
import { NDatePicker } from "naive-ui";
</script>

<template>
  <NDatePicker v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NDatePicker>
</template>