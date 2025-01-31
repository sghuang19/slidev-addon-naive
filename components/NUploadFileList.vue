<script setup>
import { NUploadFileList } from "naive-ui";
</script>

<template>
  <NUploadFileList v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NUploadFileList>
</template>