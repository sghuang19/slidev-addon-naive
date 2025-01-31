<script setup>
import { NCard } from "naive-ui";
</script>

<template>
  <NCard v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NCard>
</template>