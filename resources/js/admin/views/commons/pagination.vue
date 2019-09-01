<template>
  <b-pagination
    size="sm"
    @change="$emit('changePage', $event)"
    :total-rows="totalRows"
    :per-page="perPage"
    v-model="curPage"
    prev-text="Prev"
    next-text="Next"
    hide-goto-end-buttons
  />
</template>

<script>
export default {
  props: {
    totalRows: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    curPage: {
      get() {
        return this.currentPage;
      },
      set(newValue) {
        return newValue;
      }
    }
  }
};
</script>
