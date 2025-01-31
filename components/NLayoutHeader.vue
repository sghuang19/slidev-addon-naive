<script setup>
import { NLayoutHeader } from "naive-ui";
</script>

<template>
  <NLayoutHeader v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NLayoutHeader>
</template>