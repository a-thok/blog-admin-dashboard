import template from './home.html';

export const homeComponent = {
  template,

  controller: class HomeComponent {
    constructor(AdminService) {
      'ngInject';

      this.AdminService = AdminService;
    }

    login(event) {
      event.preventDefault();

      this.AdminService
        .login(event.currentTarget.password.value)
        .then((res) => {
          const { success, error } = res.data;
          if (success) {
            this.AdminService.isAdmin = true;
            location.reload(); // temporary, should have found a better solution
          } else {
            this.error = error;
          }
        });
    }
  },
};
