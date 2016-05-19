angular.module('app')
  .filter('age', function() {
    return function(age) {
      if (!age) return '';

      const birthday = new Date(age);
      const ageDifMs = Date.now() - birthday.getTime();
      const ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
  })
