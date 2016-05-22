angular.module('app')
  .controller('Login', Login)

Login.$inject = ['User', '$state'];

function Login(User, $state) {
  const vm = this;

  vm.login = function(email, password) {
    User.login({email, password}).then(data => {
      User.setUser(data.data.data)
      $state.go('main.users')
      }).catch(data => {
        console.log(data);
    })
  }
}
