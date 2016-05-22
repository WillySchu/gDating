angular.module('app', ['ui.router'])
  .run(function ($rootScope, $location, $window, $state, User) {
    $rootScope.$on('$stateChangeStart', function (event, next) {
      if (next.restricted && !$window.localStorage.getItem("token")) {
        console.log(next);
        event.preventDefault();
        $state.go('splash');
      }
      if (next.preventWhenLoggedIn && $window.localStorage.getItem("token")) {
        event.preventDefault()
        $state.go('main.users');
      }
    });
  });
