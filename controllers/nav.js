angular.module('app')
  .controller('Nav', Nav)

Nav.$inject = ['User', '$location'];

function Nav(User, $location) {
  const vm = this;

  vm.logout = User.logout;
  vm.profile = function() {
    console.log(User.getUserInfo());
  }

  vm.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  }
}
