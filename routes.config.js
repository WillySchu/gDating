angular.module('app')
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('splash', {
        url: '/splash',
        views: {
          'splash': {
            templateUrl: 'partials/splash.html',
            controller: 'Splash',
            controllerAs: 'splash'
          }
        }
      })
      .state('main', {
        url: '/',
        restricted: true,
        views: {
          'nav': {
            templateUrl: 'partials/nav.html',
            controller: 'Nav',
            controllerAs: 'nav'
          },
          'content': {
            templateUrl: 'partials/content.html',
          }
        }
      })
      .state('login', {
        url: '/login',
        preventWhenLoggedIn: true,
        views: {
          'content@': {
            templateUrl: 'partials/login.html',
            controller: 'Login',
            controllerAs: 'login'
          }
        }
      })
      .state('main.users', {
        url: 'users',
        restricted: true,
        views: {
          'content@': {
            templateUrl: 'partials/users.html',
            controller: 'Users',
            controllerAs: 'users'
          }
        },
        resolve: {
          currentUser: function(User) {
            return User.getUser();
          },
          users: function(Members){
            return Members.all();
          }
        }
      })
      .state('main.users.detail', {
        url: '/:id',
        restricted: true,
        views: {
          'detail@main.users': {
            templateUrl: 'partials/user-detail.html',
            controller: 'UserDetail',
            controllerAs: 'detail'
          }
        },
        resolve: {
          selectedUser: function(Members, $stateParams) {
            return Members.getUserById($stateParams.id);
          }
        }
      })
      .state('main.profile', {
        url: 'profile',
        restricted: true,
        views: {
          'content@': {
            templateUrl: 'partials/profile.html',
            controller: 'Profile',
            controllerAs: 'profile'
          }
        },
        resolve: {
          user: function(User) {
            return User.getUser();
          },
          matches: function(Members) {
            return Members.getMatches();
          }
        }
      })
  })
