angular.module('app')
  .directive('wsForm', function() {
    return {
      templateUrl: 'directives/form.html',
      link: function(scope, element, attrs, controllers) {
        console.log(scope);
      }
    }
  })
