<script setup>
import { NLayoutContent } from "naive-ui";
</script>

<template>
  <NLayoutContent v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NLayoutContent>
</template>