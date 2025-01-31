<script setup>
import { NModal } from "naive-ui";
</script>

<template>
  <NModal v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NModal>
</template>