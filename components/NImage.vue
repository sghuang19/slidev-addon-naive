<script setup>
import { NImage } from "naive-ui";
</script>

<template>
  <NImage v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NImage>
</template>