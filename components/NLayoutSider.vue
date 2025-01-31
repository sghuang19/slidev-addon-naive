<script setup>
import { NLayoutSider } from "naive-ui";
</script>

<template>
  <NLayoutSider v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NLayoutSider>
</template>