<script setup>
import { NPopselect } from "naive-ui";
</script>

<template>
  <NPopselect v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NPopselect>
</template>