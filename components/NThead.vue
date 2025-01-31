<script setup>
import { NThead } from "naive-ui";
</script>

<template>
  <NThead v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NThead>
</template>