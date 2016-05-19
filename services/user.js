angular.module('app')
  .factory('User', function($http, $window, $state) {
    const baseUrl = 'https://galvanize-student-apis.herokuapp.com/gdating/';
    let user = {};
    return {
      login: function(info) {
        return $http.post(baseUrl + 'auth/login', info)
      },
      register: function(member) {
        return $http.post(baseUrl + 'auth/register', member)
      },
      setUser: function(data) {
        user = data.data.data;
        $window.localStorage.setItem("token",data.data.data.token);
        $window.localStorage.setItem("user",JSON.stringify(data.data.data.user));
        return user;X
      },
      logout: function() {
        user = null;
        $window.localStorage.clear();
        $state.go('main');
      },
      getUser: function() {
        return JSON.parse($window.localStorage.getItem("user"));
      }
    }
  })
