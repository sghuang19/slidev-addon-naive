<script setup>
import { NEquation } from "naive-ui";
</script>

<template>
  <NEquation v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NEquation>
</template>