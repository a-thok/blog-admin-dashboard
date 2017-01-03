export class AdminService {
  constructor($http) {
    'ngInject';

    this.$http = $http;
    this.isAdmin = document.cookie.includes('admin=true');
  }

  login(password) {
    return this.$http.post('/admin/login', { password });
  }

  updatePassword(password) {
    return this.$http.patch('/admin', { password });
  }
}
