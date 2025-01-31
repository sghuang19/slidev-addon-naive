<script setup>
import { NLayout } from "naive-ui";
</script>

<template>
  <NLayout v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NLayout>
</template>