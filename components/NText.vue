<script setup>
import { NText } from "naive-ui";
</script>

<template>
  <NText v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NText>
</template>