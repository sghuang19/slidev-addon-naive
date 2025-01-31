<script setup>
import { NP } from "naive-ui";
</script>

<template>
  <NP v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NP>
</template>