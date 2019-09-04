<template>
  <b-row>
    <b-col cols="12">
      <b-alert
        fade
        dismissible
        :show="dismissCountDown"
        @dismiss-count-down="countDownChanged"
        variant="success"
      >{{ dismissMsg }} [{{ dismissCountDown }}]</b-alert>
      <transition name="slide">
        <b-card>
          <div slot="header">
            <div class="float-left">{{ caption }}</div>
            <div class="button-action float-right">
              <b-button @click="doAction('create')" variant="primary" size="sm" class="mr-1">
                <i class="fa fa-plus"></i> Create
              </b-button>
            </div>
          </div>

          <b-row>
            <b-col align-self="end">
              <b-form-group class="float-right">
                <b-input-group>
                  <b-form-input type="text" v-model="keyword" @change="fetchUsers(1)"></b-form-input>
                  <b-input-group-prepend>
                    <b-button variant="primary">
                      <i class="fa fa-search"></i>
                    </b-button>
                  </b-input-group-prepend>
                </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>

          <b-table
            :hover="hover"
            :striped="striped"
            :bordered="bordered"
            :small="small"
            :fixed="fixed"
            responsive="sm"
            :items="items"
            :fields="fields"
            @row-clicked="rowClicked"
          >
            <template slot="id" slot-scope="data">
              <strong>{{data.item.id}}</strong>
            </template>
            <template slot="name" slot-scope="data">
              <strong>{{data.item.name}}</strong>
            </template>
          </b-table>
          <nav>
            <Pagination
              :perPage="perPage"
              :totalRows="totalRows"
              :currentPage="currentPage"
              @changePage="fetchUsers($event)"
            />
          </nav>
        </b-card>
      </transition>
    </b-col>
    <b-modal
      size="lg"
      @ok="handleAction"
      ok-variant="success"
      v-model="modal.show"
      class="modal-success"
      :title="modal.caption"
      @hidden="resetUserModal"
    >
      <b-form-group label="Name">
        <b-form-input trim v-model="modal.user.name"></b-form-input>
      </b-form-group>
      <b-form-group label="Email">
        <b-form-input type="email" v-model="modal.user.email"></b-form-input>
      </b-form-group>
      <b-form-group label="Password">
        <b-input-group>
          <b-form-input
            :type="modal.typePassword ? 'password' : 'text'"
            v-model="modal.user.password"
          ></b-form-input>
          <b-input-group-prepend>
            <b-button
              variant="primary"
              @click="modal.typePassword = !modal.typePassword"
            >Show / Hide</b-button>
          </b-input-group-prepend>
        </b-input-group>
      </b-form-group>
    </b-modal>
  </b-row>
</template>

<script>
import Pagination from "../commons/pagination";

export default {
  name: "Users",
  components: { Pagination },
  props: {
    caption: {
      type: String,
      default: "Users"
    },
    hover: {
      type: Boolean,
      default: true
    },
    striped: {
      type: Boolean,
      default: true
    },
    bordered: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      dismissSecs: 5,
      dismissCountDown: 0,
      dismissMsg: "",
      modal: {
        show: false,
        action: null,
        caption: "",
        typePassword: true,
        user: {
          id: "",
          name: "",
          email: "",
          password: ""
        }
      },
      items: [],
      fields: [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "created_at", label: "Created at" },
        { key: "action", label: "Action" }
      ],
      perPage: 5,
      totalRows: 0,
      currentPage: 1,
      keyword: ""
    };
  },
  mounted() {
    this.fetchUsers(this.currentPage);
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    fetchUsers(page) {
      const payload = { page: page };
      this.keyword = _.trim(this.keyword);
      if (this.keyword) {
        payload.keyword = this.keyword;
      }
      this.$store.dispatch("user/fetch", payload).then(res => {
        this.items = res.data;
        this.totalRows = res.total;
        this.perPage = res.per_page;
        this.currentPage = res.current_page;
      });
    },
    userLink(id) {
      return `users/${id.toString()}`;
    },
    rowClicked(item) {
      const userLink = this.userLink(item.id);
      this.$router.push({ path: userLink });
    },
    resetUserModal() {
      this.modal.typePassword = true;
      this.modal.user = {
        id: "",
        name: "",
        email: "",
        password: ""
      };
    },
    doAction(action) {
      switch (action) {
        case "create":
          this.modal.caption = "Create user";
          break;

        case "update":
          this.modal.caption = "Update user";
          break;
      }
      this.modal.action = action;
      this.modal.show = true;
    },
    handleAction() {
      let dispatch = "user/update";
      if (this.modal.action == "create") {
        dispatch = "user/create";
      }
      this.$store
        .dispatch(dispatch, this.modal.user)
        .then(res => {
          this.fetchUsers(1);
          this.dismissCountDown = this.dismissSecs;
          this.dismissMsg =
            this.modal.action == "create"
              ? "Created user successfully"
              : "Updated user succesfully";
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
