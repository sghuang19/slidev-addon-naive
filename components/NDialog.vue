<script setup>
import { NDialog } from "naive-ui";
</script>

<template>
  <NDialog v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NDialog>
</template>