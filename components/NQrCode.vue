<script setup>
import { NQrCode } from "naive-ui";
</script>

<template>
  <NQrCode v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NQrCode>
</template>