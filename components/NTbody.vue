<script setup>
import { NTbody } from "naive-ui";
</script>

<template>
  <NTbody v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NTbody>
</template>