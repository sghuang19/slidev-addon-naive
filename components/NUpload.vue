<script setup>
import { NUpload } from "naive-ui";
</script>

<template>
  <NUpload v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NUpload>
</template>