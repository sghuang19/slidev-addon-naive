<script setup>
import { NDivider } from "naive-ui";
</script>

<template>
  <NDivider v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NDivider>
</template>