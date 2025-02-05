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

---

## NList

<n-list hoverable clickable>
  <n-list-item>
    <n-thing title="Better Late Than Never" content-style="margin-top: 10px;">
      <template #description>
        <n-space size="small" style="margin-top: 4px">
          <n-tag :bordered="false" type="info" size="small">
            Tag A
          </n-tag>
          <n-tag :bordered="false" type="info" size="small">
            Tag B
          </n-tag>
        </n-space>
      </template>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco.
    </n-thing>
  </n-list-item>
  <n-list-item>
    <n-thing title="Lorem Ipsum" content-style="margin-top: 10px;">
      <template #description>
        <n-space size="small" style="margin-top: 4px">
          <n-tag :bordered="false" type="info" size="small">
            Tag C
          </n-tag>
          <n-tag :bordered="false" type="info" size="small">
            Tag D
          </n-tag>
        </n-space>
      </template>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco.
    </n-thing>
  </n-list-item>
</n-list>

---

## NMarquee

<n-marquee auto-fill>
  <n-image
    width="80"
    height="80"
    src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    style="margin-right: 24px"
  />
</n-marquee>
