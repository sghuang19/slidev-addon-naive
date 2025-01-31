<script setup>
import { NBlockquote } from "naive-ui";
</script>

<template>
  <NBlockquote v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NBlockquote>
</template>