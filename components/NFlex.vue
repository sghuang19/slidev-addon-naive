<script setup>
import { NFlex } from "naive-ui";
</script>

<template>
  <NFlex v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NFlex>
</template>