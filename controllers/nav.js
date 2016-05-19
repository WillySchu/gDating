angular.module('app')
  .controller('Nav', Nav)

Nav.$inject = ['User'];

function Nav(User) {
  const vm = this;

  vm.logout = User.logout;
  vm.profile = function() {
    console.log(User.getUserInfo());
  }
}
