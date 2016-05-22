angular.module('app')
  .controller('Splash', Splash)

Splash.$inject = ['User', '$state']

function Splash(User, $state) {
  const vm = this;

  vm.register = function() {
    if (Object.keys(vm.new.interestedIn).length) {
      const interests = [];
      for (i in vm.new.interestedIn) {
        if (vm.new.interestedIn[i]) {
          interests.push(parseInt(i.slice(-1)));
        }
      }
      vm.new.interestedIn = interests;
    }
    vm.new.address = {};
    vm.new.address.geo = {};
    vm.new.address.geo.lat = 0;
    vm.new.address.geo.lng = 0;
    vm.new.slug = vm.new.username;
    User.register(vm.new).then(data => {
      User.setUser(data.data.data);
      console.log(data);
      $state.go('main.users')
    }).catch(err => {
      console.log(err);
    })
  }

  vm.login = function(email, password) {
    User.login({email, password}).then(data => {
      User.setUser(data.data.data)
      $state.go('main.users')
    }).catch(err => {
        console.log(err);
    })
  }

}
