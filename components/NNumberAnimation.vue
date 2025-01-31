<script setup>
import { NNumberAnimation } from "naive-ui";
</script>

<template>
  <NNumberAnimation v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NNumberAnimation>
</template>