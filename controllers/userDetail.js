angular.module('app')
  .controller('UserDetail', UserDetail)

UserDetail.$inject = ['Members', '$stateParams']

function UserDetail(Members, $stateParams) {
  const vm = this;
  Members.getUserById($stateParams.id).then(member => {
    vm.member = member;
  })
}
