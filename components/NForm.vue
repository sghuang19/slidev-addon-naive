<script setup>
import { NForm } from "naive-ui";
</script>

<template>
  <NForm v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NForm>
</template>