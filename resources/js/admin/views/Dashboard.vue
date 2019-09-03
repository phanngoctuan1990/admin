<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-info">
          <router-link to="/users" tag="p">
            <b-card-body class="pb-0">
              <b-row>
                <b-col cols="9">
                  <h4 class="mb-0">Manager users</h4>
                  <h4 class="mb-0">{{ countUser }}</h4>
                </b-col>
                <b-col cols="3">
                  <i class="icon-user icon-custom"></i>
                </b-col>
              </b-row>
            </b-card-body>
          </router-link>
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-warning">
          <router-link to="/products" tag="p">
            <b-card-body class="pb-0">
              <b-row>
                <b-col cols="9">
                  <h4 class="mb-0">Manager products</h4>
                  <h4 class="mb-0">{{ countProduct }}</h4>
                </b-col>
                <b-col cols="3">
                  <i class="icon-present icon-custom"></i>
                </b-col>
              </b-row>
            </b-card-body>
          </router-link>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  data() {
    return {
      countUser: 0,
      countProduct: 0
    };
  },
  mounted() {
    this.fetchDashboard();
  },
  methods: {
    fetchDashboard() {
      this.$store
        .dispatch("dashboard/fetch")
        .then(res => {
          this.countUser = res.countUser;
          this.countProduct = res.countProduct;
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style scoped>
.icon-custom {
  font-size: 50px;
}
</style>
