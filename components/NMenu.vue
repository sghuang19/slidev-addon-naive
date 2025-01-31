<script setup>
import { NMenu } from "naive-ui";
</script>

<template>
  <NMenu v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NMenu>
</template>