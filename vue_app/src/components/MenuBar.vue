<template>
  <Menubar class="" :model="items">
    <template #start>
      <div class="">React Laravel Boilerplate</div>
    </template>
    <template #end>
      <Button
        type="button"
        label="Account"
        @click="toggle"
        aria-haspopup="true"
        aria-controls="overlay_menu"
      />
      <Menu id="overlay_menu" ref="menu" :model="userItems" :popup="true" />
    </template>
  </Menubar>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const menu = ref();
    const userItems = ref([
      {
        label: "Security",
        items: [
          {
            label: "Logout",
            icon: "pi pi-sign-out",
            command: () => {
              console.log("do logout here");
            },
          },
        ],
      },
    ]);

    const items = ref([
      {
        label: "File",
        icon: "pi pi-fw pi-file",
        items: [
          {
            label: "New",
            icon: "pi pi-fw pi-plus",
            items: [
              {
                label: "Bookmark",
                icon: "pi pi-fw pi-bookmark",
              },
              {
                label: "Video",
                icon: "pi pi-fw pi-video",
              },
            ],
          },
          {
            label: "Delete",
            icon: "pi pi-fw pi-trash",
          },
          {
            separator: true,
          },
          {
            label: "Export",
            icon: "pi pi-fw pi-external-link",
          },
        ],
      },
      {
        label: "User",
        icon: "pi pi-fw pi-external-link",
        class: "float-right",
      },
    ]);

    const toggle = (event) => {
      menu.value.toggle(event);
    };

    return { items, userItems, toggle, menu };
  },
};
</script>
