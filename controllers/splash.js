angular.module('app')
  .controller('Splash', Splash)

Splash.$inject = ['User', '$state']

function Splash(User, $state) {
  const vm = this;

  vm.register = function() {
    console.log(vm.new);
    vm.new.
    // User.register(vm.new);
  }

  vm.login = function(email, password) {
    User.login({email, password}).then(data => {
      User.setUser(data.data.data)
      $state.go('main.users')
      }).catch(data => {
        console.log(data);
    })
  }

}
