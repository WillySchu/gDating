angular.module('app')
  .controller('Users', Users)

Users.$inject = ['$state', 'Members', 'User', 'currentUser', 'users'];

function Users($state, Members, User, currentUser, users) {
  const vm = this;
  console.log(users);
  vm.members = users;

  vm.showDetails = function(id) {
    $state.go('main.users.detail({id: '+id+'})')
  }

  vm.match = function(id) {
    Members.match(currentUser, id).then(user => {
      User.updateUser(user.data.data);
    }).catch(err => {
      console.log(err);
    })
  }
}
