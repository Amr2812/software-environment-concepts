<template>
  <button
    type="button"
    class="btn py-2 px-4 flex justify-center items-center 2-auto rounded-lg"
  >
    <slot name="icon"></slot>
    {{ text }}
    <slot name="icon-right"></slot>
  </button>
</template>

<script>
export default {
  props: ["text"],
};
</script>