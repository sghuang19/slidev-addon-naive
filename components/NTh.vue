<script setup>
import { NTh } from "naive-ui";
</script>

<template>
  <NTh v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NTh>
</template>