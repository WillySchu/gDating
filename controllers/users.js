angular.module('app')
  .controller('Users', Users)

Users.$inject = ['Members'];

function Users(Members, currentUser, Users) {
  const vm = this;

  Members.all().then(members => {
    vm.members = members;
    console.log(currentUser);
    console.log(Users);
  })
}
