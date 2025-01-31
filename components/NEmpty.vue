<script setup>
import { NEmpty } from "naive-ui";
</script>

<template>
  <NEmpty v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NEmpty>
</template>