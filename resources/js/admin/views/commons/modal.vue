<template>
  <b-modal
    :size="size"
    :title="caption"
    v-model="showModal"
    class="modal-success"
    @ok="$emit('submitModal')"
    ok-variant="success"
  >
  </b-modal>
</template>

<script>
export default {
  props: {
    caption: {
      type: String,
      required: true
    },
    show: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "sm"
    }
  },
  computed: {
    showModal: {
      get() {
        return this.show;
      },
      set(newValue) {
        return newValue;
      }
    }
  }
};
</script>
