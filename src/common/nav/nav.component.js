import template from './nav.html';

export const navComponent = {
  template,

  controller: class NavComponent {
    constructor(ROUTES, AdminService) {
      'ngInject';

      if (AdminService.isAdmin) {
        this.routes = ROUTES;
      } else {
        this.routes = ROUTES.slice(0, 1);
      }
    }
  },
};
