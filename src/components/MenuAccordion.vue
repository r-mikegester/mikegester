<template>
  <button @click="toggleAccordion()"
    class="text-gray-800 dark:text-gray-500 bg-transparent hover:bg-emerald-200 dark:hover:bg-gray-700 w-full flex text-left rounded-xl box-border p-3"
    :aria-expanded="isOpen" :aria-controls="`collapse${_uid}`" :class="{
      'bg-gray-200  dark:bg-emerald-500/40 dark:text-white ': isOpen,
      'bg-transparent': !isOpen,
    }">
    <span class="mr-3 text-xl">
      <slot name="icon"></slot>
    </span>
    <span class="w-full">
      <slot name="title" />
    </span>
    <span class="box-border mt-1 text-gray-500 dark:text-gray-500" :class="{
      'rotate-180 dark:text-white': isOpen,
      'rotate-0': !isOpen,
    }">
      <span class="float-right">
        <Icon icon="fa6-solid:angle-down" />
      </span>
    </span>
  </button>

  <div v-show="isOpen" :id="`collapse${_uid}`">
    <slot name="content" />
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
  components: {
    Icon,
  },
};
</script>
