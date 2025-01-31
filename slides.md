---
addons:
  - naive
---

# Preview

---

## NButton

Basic

<NSpace>
  <NButton>Default</NButton>
  <NButton type="tertiary">
    Tertiary
  </NButton>
  <NButton type="primary">
    Primary
  </NButton>
  <NButton type="info">
    Info
  </NButton>
  <NButton type="success">
    Success
  </NButton>
  <NButton type="warning">
    Warning
  </NButton>
  <NButton type="error">
    Error
  </NButton>
</NSpace>

Secondary button

<NSpace>
  <NButton strong secondary>
    Default
  </NButton>
  <NButton strong secondary type="tertiary">
    Tertiary
  </NButton>
  <NButton strong secondary type="primary">
    Primary
  </NButton>
  <NButton strong secondary type="info">
    Info
  </NButton>
  <NButton strong secondary type="success">
    Success
  </NButton>
  <NButton strong secondary type="warning">
    Warning
  </NButton>
  <NButton strong secondary type="error">
    Error
  </NButton>
  <NButton strong secondary round>
    Default
  </NButton>
  <NButton strong secondary round type="primary">
    Primary
  </NButton>
  <NButton strong secondary round type="info">
    Info
  </NButton>
  <NButton strong secondary round type="success">
    Success
  </NButton>
  <NButton strong secondary round type="warning">
    Warning
  </NButton>
  <NButton strong secondary round type="error">
    Error
  </NButton>
</NSpace>

Tertiary button

<NSpace>
  <NButton tertiary>
    Default
  </NButton>
  <NButton tertiary type="primary">
    Primary
  </NButton>
  <NButton tertiary type="info">
    Info
  </NButton>
  <NButton tertiary type="success">
    Success
  </NButton>
  <NButton tertiary type="warning">
    Warning
  </NButton>
  <NButton tertiary type="error">
    Error
  </NButton>
  <NButton tertiary round>
    Default
  </NButton>
  <NButton tertiary round type="primary">
    Primary
  </NButton>
  <NButton tertiary round type="info">
    Info
  </NButton>
  <NButton tertiary round type="success">
    Success
  </NButton>
  <NButton tertiary round type="warning">
    Warning
  </NButton>
  <NButton tertiary round type="error">
    Error
  </NButton>
</NSpace>

---

## NCard

<div style="display: flex; gap: 25px;">
  <NCard title="Card with Cover">
    <template #cover>
      <img src="https://picsum.photos/400/200" alt="cover">
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
