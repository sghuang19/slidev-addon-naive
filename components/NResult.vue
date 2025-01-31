<script setup>
import { NResult } from "naive-ui";
</script>

<template>
  <NResult v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NResult>
</template>