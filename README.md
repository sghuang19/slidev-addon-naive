# slidev-addon-naive

A [Slidev](https://sli.dev) addon that brings [Naive UI](https://naiveui.com)
components to your slides.

<div style="text-align: center">
  <a href="https://npmjs.com/package/slidev-addon-naive">
    <img
      src="https://img.shields.io/npm/v/slidev-addon-naive?color=2B90B6"
      alt="NPM version"
    >
  </a>
</div>

## Usage

Install the package, with your package manager of choice:

```sh
npm install --save slidev-addon-naive
pnpm add slidev-addon-naive
yarn add slidev-addon-naive
bun add slidev-addon-naive
```

## As a Slidev Addon

Then, enable this addon for your slides using front matter:

<!-- prettier-ignore -->
```markdown
<!-- slides.md -->
---
addons:
  - naive
---
# A Slide Show
...
```

Alternatively, you can enable the addon by adding the following property into
`package.json`:

```json
{
  "slidev": {
    "addons": ["naive"]
  }
}
```

## As a Vue Plugin

> [!WARNING]
>
> This mode is only recommended for advanced users who specifically require it.
> Certain features, such as tree-shaking, are exclusively available in Slidev
> addon mode.

Since `v0.7.0`, you can also use this as a Vue plugin. This helps avoid some
configuration file conflicts.

```ts
// main/setup.ts
import naive from "slidev-naive-addon";

export default defineAppSetup(({ app }) => {
  app.use(naive);
});
```

---

You can now seamlessly use Naive UI components in your slides, just as you would
in any other Vue application! Both `<n-name>` and `<NName>` syntaxes are
supported, along with full compatibility for props and slots.

<!-- prettier-ignore -->
```html
<n-button strong tertiary>Button</n-button>

<NButton>Button</NButton>

<NCard title="Card Slots Demo" size="large" hoverable>
  <template #header-extra>
    #header-extra
  </template>
  Card Content
  <template #footer>
    #footer
  </template>
  <template #action>
    #action
  </template>
</NCard>
```

> [!TIP]
>
> It is recommended to use the `NName` convention instead of `n-name`, for two
> reasons:
>
> 1. Tag names that have dashes in them may not be correctly syntax-highlighted
>    in Markdown files.
> 2. Pascal Case convention aligns with other components used in Slidev.

## Known Issues

- If you found your local configs are not taking effect (e.g. `style.css`,
  `uno.config.ts`), try using this addon as a [Vue Plugin](#as-a-vue-plugin)
  instead (requires `v0.7.0`).

## Latest Changes

- **`v0.9.0`:** Added support for tree-shaking Naive UI components. This feature
  only works when used [as a Slidev addon](#as-a-slidev-addon).
- **`v0.8.4`:** Added support for dynamic icon size in `<Alert>`.
- **`v0.8.3`:** Fixed a bug where `@apply` directives in local CSS files were
  not being applied correctly.
- **`v0.8.2`:** Corrected font size of `<Alert>` title.
- **`v0.8.1`:** Fixed a bug where font sizes applied by UnoCSS `@apply`
  directives were not taking effect.
- **`v0.8.0`:** Override Naive UI font size with base font size.
- **`v0.7.0`:** Added support for using addon as a Vue plugin.
- **`v0.6.0`:** Added full support for UnoCSS utility classes. No more `!`
  prefixes needed!
- **`v0.5.1`:** Improved logic in `main.ts`.
- **`v0.5.0`:** Added support for dynamic dark theme.
- **`v0.4.0`:** Fixed a bug that caused Naive UI styles not loaded.
- **`v0,3.0`:** Adopted a new way of loading components.
- **`v0.2.0`:** Added all components.
- **`v0.1.0`:** First working version with a few components.
