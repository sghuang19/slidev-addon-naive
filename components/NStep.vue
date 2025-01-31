<script setup>
import { NStep } from "naive-ui";
</script>

<template>
  <NStep v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NStep>
</template>