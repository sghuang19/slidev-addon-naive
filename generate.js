import fs from "fs";
import path from "path";
import * as naive from "naive-ui";

const componentNames = Object.keys(naive).filter(
  (key) => key.startsWith('N') && key[1] === key[1].toUpperCase()
);
console.log("List of components:");
console.log(componentNames);

const outputDir = "./components";
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Template for the Vue component
const componentTemplate = (componentName) => `
<script setup>
import { ${componentName} } from "naive-ui";
</script>

<template>
  <${componentName} v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps || {}" />
    </template>
  </${componentName}>
</template>

`;

// Generate a Vue component file for each component name
componentNames.forEach((componentName) => {
  const fileName = `${componentName}.vue`;
  const filePath = path.join(outputDir, fileName);
  const content = componentTemplate(componentName);

  fs.writeFileSync(filePath, content.trim(), "utf-8");
  console.log(`Generated: ${filePath}`);
});

console.log("All components generated successfully!");
