angular.module('app')
  .controller('Nav', Nav)

Nav.$inject = ['User', '$location', 'Members', '$state'];

function Nav(User, $location, Members, $state) {
  const vm = this;

  vm.logout = function() {
    User.logout();
    $state.go('splash');
  }

  vm.profile = function() {
    console.log(User.getUserInfo());
  }

  vm.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  }

  vm.search = function(term) {
    $state.go('main.search', {term: term});
    console.log($state);
    // console.log(term);
  }
}
