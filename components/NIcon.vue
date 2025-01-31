<script setup>
import { NIcon } from "naive-ui";
</script>

<template>
  <NIcon v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NIcon>
</template>