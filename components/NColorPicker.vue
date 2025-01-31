<script setup>
import { NColorPicker } from "naive-ui";
</script>

<template>
  <NColorPicker v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NColorPicker>
</template>