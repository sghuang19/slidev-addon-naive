<script setup>
import { NTreeSelect } from "naive-ui";
</script>

<template>
  <NTreeSelect v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NTreeSelect>
</template>