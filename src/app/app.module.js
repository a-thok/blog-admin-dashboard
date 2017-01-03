import angular from 'angular';
import './style.css';
import '../components/app-nav.module';
import '../components/article.module';
import '../services/article-service';
import '../services/admin-service';

angular
  .module('app', [
    'ngRoute',
    'appNav',
    'article',
    'articleService',
    'adminService',
  ])
  .controller('appCtrl', ['admin', function appCtrl(admin) {
    this.isAdmin = document.cookie.includes('admin=true');

    this.login = (event) => {
      event.preventDefault();
      admin.login(event.currentTarget.password.value)
        .then((res) => {
          const { success, error } = res.data;
          if (success) {
            this.isAdmin = true;
            location.reload(); // temp, i did this because the view wouldn't update
          } else {
            this.error = error;
          }
        });
    };

    this.updatePassword = (event) => {
      event.preventDefault();

      admin.update(event.currentTarget.password.value)
        .then((res) => {
          if (res.data.success) {
            alert('密码更新成功');
          } else {
            alert('密码更新失败');
          }
        });
    };
  }]);
