<script setup>
import { NAlert } from "naive-ui";
</script>

<template>
  <NAlert v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NAlert>
</template>