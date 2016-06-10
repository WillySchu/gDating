angular.module('app')
  .controller('Profile', Profile)

Profile.$inject = ['User', 'Members', 'user', 'matches', 'convos'];

function Profile(User, Members, user, matches, convos) {
  const vm = this;

  vm.convos = convos.data.data;
  vm.user = user;
  vm.matches = [];

  for (i in matches) {
    vm.matches[i] = matches[i].data.data;
    for (j in vm.convos) {
      if (vm.convos[j]._members[1] === vm.matches[i]._id || vm.convos[j]._members[0] === vm.matches[i]._id) {
        vm.matches[i].messages = vm.convos[j];
      }
    }
  }

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
}
