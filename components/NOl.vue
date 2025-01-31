<script setup>
import { NOl } from "naive-ui";
</script>

<template>
  <NOl v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NOl>
</template>