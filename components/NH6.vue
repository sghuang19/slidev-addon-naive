<script setup>
import { NH6 } from "naive-ui";
</script>

<template>
  <NH6 v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NH6>
</template>