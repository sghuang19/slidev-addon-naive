<script setup>
import { NCountdown } from "naive-ui";
</script>

<template>
  <NCountdown v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NCountdown>
</template>