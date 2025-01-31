<script setup>
import { NUploadDragger } from "naive-ui";
</script>

<template>
  <NUploadDragger v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NUploadDragger>
</template>