export default {
    methods: {
        checkAdmin(items) {
            const isAdminUser = this.$store.state.auth.userProfile.is_admin;
            return _.filter(
                items,
                item => !item.admin || (item.admin && item.admin == isAdminUser)
            );
        }
    }
};
