<script setup>
import { NCard } from "naive-ui";
</script>

<template>
  <n-card v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </n-card>
</template>
