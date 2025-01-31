<script setup>
import { NAutoComplete } from "naive-ui";
</script>

<template>
  <NAutoComplete v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NAutoComplete>
</template>