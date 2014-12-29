// @ngInject
function repo($http, $q, $cookies) {
  this.get = function () {
    return $http.get('https://api.github.com/repositories', {
      headers: {
        Authorization: 'token ' + $cookies.access_token
      }
    });
  };
}

// @ngInject
function RepoController ($scope, repo) {
  repo.get().success(function (result) {
    $scope.repos = result;
  });
}

angular.module('app', ['ngCookies'])
  .service('repo', repo)
  .controller('RepoController', RepoController);

angular.bootstrap(document, ['app']);
