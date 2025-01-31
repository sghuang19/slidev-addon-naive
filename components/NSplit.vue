<script setup>
import { NSplit } from "naive-ui";
</script>

<template>
  <NSplit v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NSplit>
</template>