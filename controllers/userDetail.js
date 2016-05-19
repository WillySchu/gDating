angular.module('app')
  .controller('UserDetail', UserDetail)

UserDetail.$inject = ['Members', '$stateParams', 'selectedUser']

function UserDetail(Members, $stateParams, selectedUser) {
  const vm = this;
  
  vm.member = selectedUser;
}
