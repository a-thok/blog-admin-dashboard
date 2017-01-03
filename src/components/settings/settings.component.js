import template from './settings.html';

export const settingsComponent = {
  template,

  controller: class SettingsComponent {
    constructor(AdminService) {
      'ngInject';

      this.AdminService = AdminService;
    }

    updatePassword(event) {
      event.preventDefault();

      this.AdminService
        .updatePassword(event.currentTarget.password.value)
        .then((res) => {
          if (res.data.success) {
            alert('密码更新成功');
          } else {
            alert('密码更新失败');
          }
        });
    }
  },
};
