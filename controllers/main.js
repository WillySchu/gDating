angular.module('app')
  .controller('Main', Main)

Main.$inject = ['Members'];

function Main(Members) {
  const vm = this;

  Members.all().then(members => {
    console.log(members);
    vm.members = members;
  })
}
