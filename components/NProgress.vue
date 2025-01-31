<script setup>
import { NProgress } from "naive-ui";
</script>

<template>
  <NProgress v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NProgress>
</template>