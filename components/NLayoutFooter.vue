<script setup>
import { NLayoutFooter } from "naive-ui";
</script>

<template>
  <NLayoutFooter v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NLayoutFooter>
</template>