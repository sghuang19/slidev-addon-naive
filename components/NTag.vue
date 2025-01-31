<script setup>
import { NTag } from "naive-ui";
</script>

<template>
  <NTag v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NTag>
</template>