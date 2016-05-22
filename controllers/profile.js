angular.module('app')
  .controller('Profile', Profile)

Profile.$inject = ['User', 'user', 'matches'];

function Profile(User, user, matches) {
  const vm = this;

  vm.matches = [];

  for (i in matches) {
    vm.matches[i] = matches[i].data.data
  }

  vm.user = user;
  console.log(vm.user);
  console.log(vm.matches);
}
