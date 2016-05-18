angular.module('app')
  .factory('Members', function($http) {
    const baseUrl = 'https://galvanize-student-apis.herokuapp.com/gdating/';
    return {
      all: function() {
        return $http.get(baseUrl + 'members?limit=50').then(members => {
          console.log(members.data.data);
          return members.data.data;
        })
      },
      getUserById: function(id) {
        return $http.get(baseUrl + 'members/' + id).then(member => {
          return member.data.data
        })
      }
    }
  })
