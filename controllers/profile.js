angular.module('app')
  .controller('Profile', Profile)

Profile.$inject = ['User', 'user'];

function Profile(User, user) {
  const vm = this;

  vm.user = user;
  console.log(vm.user);
}
