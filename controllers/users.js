angular.module('app')
  .controller('Users', Users)

Users.$inject = ['$state', 'Members', 'currentUser', 'users'];

function Users($state, Members, currentUser, users) {
  const vm = this;
  console.log(users);
  vm.members = users;

  vm.showDetails = function(id) {
    $state.go('main.users.detail({id: '+id+'})')
  }

  vm.match = function() {
    console.log('match');
  }
}
