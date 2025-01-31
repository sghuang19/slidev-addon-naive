<script setup>
import { NButtonGroup } from "naive-ui";
</script>

<template>
  <NButtonGroup v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NButtonGroup>
</template>