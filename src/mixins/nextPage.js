export default {
  data() {
    return {
      page: 1,
      lastPage: 1
    };
  },
  computed: {
    nextPage() {
      return this.page < this.lastPage;
    }
  },
  methods: {
    increasePage() {
      if (this.page >= this.lastPage) return;

      this.page++;
    }
  }
};
