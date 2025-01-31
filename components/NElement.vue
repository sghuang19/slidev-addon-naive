<script setup>
import { NElement } from "naive-ui";
</script>

<template>
  <NElement v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NElement>
</template>