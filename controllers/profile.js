angular.module('app')
  .controller('Profile', Profile)

Profile.$inject = ['User', 'Members', 'user', 'matches'];

function Profile(User, Members, user, matches, convos) {
  const vm = this;

  vm.matches = [];

  for (i in matches) {
    vm.matches[i] = matches[i].data.data
  }

  vm.convos = convos
  vm.user = user;

  vm.unmatch = function(id) {
    for (i in matches) {
      if (vm.matches[i]._id === id) {
        vm.matches.splice(i, 1);
        break;
      }
    }
    Members.match(user, id).then(data => {
      User.updateUser(data.data.data);
    })
  }

  vm.sendMessage = Members.sendMessage;

  console.log(vm.user);
  console.log(vm.matches);
  console.log(vm.convos);
}
