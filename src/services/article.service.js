export class ArticleService {
  constructor($http) {
    'ngInject';

    this.$http = $http;
  }

  getArticles(page) {
    return this.$http.get(`/article/json?page=${page}`);
  }

  getArticle(id) {
    return this.$http.get(`/article/json/${id}`);
  }

  createArticle(body) {
    return this.$http.post('/article', body);
  }

  updateArticle(id, body) {
    return this.$http.patch(`/article?id=${id}`, body);
  }

  removeArticle(id) {
    return this.$http.delete(`/article/${id}`);
  }
}
