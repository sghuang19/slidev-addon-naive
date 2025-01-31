<script setup>
import { NButton } from "naive-ui";
</script>

<template>
  <NButton v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NButton>
</template>