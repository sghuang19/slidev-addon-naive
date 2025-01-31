<script setup>
import { NBackTop } from "naive-ui";
</script>

<template>
  <NBackTop v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NBackTop>
</template>