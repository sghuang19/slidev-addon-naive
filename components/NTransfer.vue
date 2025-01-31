<script setup>
import { NTransfer } from "naive-ui";
</script>

<template>
  <NTransfer v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NTransfer>
</template>