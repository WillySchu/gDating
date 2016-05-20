angular.module('app')
  .directive('wsForm', function() {
    return {
      transclude: true,
      templateUrl: 'directives/form.html'
    },
    link: function(scope, element, attrs, controllers) {
      
    }
  })
