<script setup>
import { NTab } from "naive-ui";
</script>

<template>
  <NTab v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NTab>
</template>