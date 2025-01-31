<script setup>
import { NEl } from "naive-ui";
</script>

<template>
  <NEl v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NEl>
</template>