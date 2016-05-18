angular.module('app', ['ui.router'])
  .run(function ($rootScope, $location, $window, $state, User) {
    $rootScope.$on('$stateChangeStart', function (event, next) {
      console.log(next);
      // if you try access a restricted page without logging in
      if (next.restricted && !$window.localStorage.getItem("token")) {
        $state.go('main.login');
      }
      // if you try to log in or sign up once logged in
      if (next.preventWhenLoggedIn && $window.localStorage.getItem("token")) {
        $state.go('main.users');
      }
    });
  });
