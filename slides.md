---
addons:
  - naive
---

# Preview

---

## NButton

Basic

<n-space>
  <n-button>Default</n-button>
  <n-button type="tertiary">
    Tertiary
  </n-button>
  <n-button type="primary">
    Primary
  </n-button>
  <n-button type="info">
    Info
  </n-button>
  <n-button type="success">
    Success
  </n-button>
  <n-button type="warning">
    Warning
  </n-button>
  <n-button type="error">
    Error
  </n-button>
</n-space>

Secondary button

<n-space>
  <n-button strong secondary>
    Default
  </n-button>
  <n-button strong secondary type="tertiary">
    Tertiary
  </n-button>
  <n-button strong secondary type="primary">
    Primary
  </n-button>
  <n-button strong secondary type="info">
    Info
  </n-button>
  <n-button strong secondary type="success">
    Success
  </n-button>
  <n-button strong secondary type="warning">
    Warning
  </n-button>
  <n-button strong secondary type="error">
    Error
  </n-button>
  <n-button strong secondary round>
    Default
  </n-button>
  <n-button strong secondary round type="primary">
    Primary
  </n-button>
  <n-button strong secondary round type="info">
    Info
  </n-button>
  <n-button strong secondary round type="success">
    Success
  </n-button>
  <n-button strong secondary round type="warning">
    Warning
  </n-button>
  <n-button strong secondary round type="error">
    Error
  </n-button>
</n-space>

Tertiary button

<n-space>
  <n-button tertiary>
    Default
  </n-button>
  <n-button tertiary type="primary">
    Primary
  </n-button>
  <n-button tertiary type="info">
    Info
  </n-button>
  <n-button tertiary type="success">
    Success
  </n-button>
  <n-button tertiary type="warning">
    Warning
  </n-button>
  <n-button tertiary type="error">
    Error
  </n-button>
  <n-button tertiary round>
    Default
  </n-button>
  <n-button tertiary round type="primary">
    Primary
  </n-button>
  <n-button tertiary round type="info">
    Info
  </n-button>
  <n-button tertiary round type="success">
    Success
  </n-button>
  <n-button tertiary round type="warning">
    Warning
  </n-button>
  <n-button tertiary round type="error">
    Error
  </n-button>
</n-space>

---

## NCard

<div style="display: flex; gap: 25px;">
  <NCard title="Card with Cover">
    <template #cover>
      <img v-else src="https://picsum.photos/400/200">
    </template>
    Lorem ipsum dolor sit amet veniam nostrud magna dolore veniam pariatur. Dolor
    incididunt duis ipsum sit cupidatat. Elit qui aliquip anim minim laborum duis
    ea ut elit in eiusmod cillum eu proident commodo reprehenderit nisi commodo.
  </NCard>
  <NCard title="Card Slots Demo">
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
</div>
