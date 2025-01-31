<script setup>
import { NUploadTrigger } from "naive-ui";
</script>

<template>
  <NUploadTrigger v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NUploadTrigger>
</template>