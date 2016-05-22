angular.module('app')
  .factory('User', function($http, $window, $state, $q) {
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
        $window.localStorage.setItem("token",data.token);
        $window.localStorage.setItem("user",JSON.stringify(data.user));
        return data;
      },
      updateUser: function(data) {
        $window.localStorage.setItem('user', JSON.stringify(data))
        return data;
      },
      logout: function() {
        user = null;
        $window.localStorage.clear();
        $state.go('main');
      },
      getUser: function() {
        return JSON.parse($window.localStorage.getItem('user'));
      }
    }
  })
