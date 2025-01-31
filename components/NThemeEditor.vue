<script setup>
import { NThemeEditor } from "naive-ui";
</script>

<template>
  <NThemeEditor v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </NThemeEditor>
</template>