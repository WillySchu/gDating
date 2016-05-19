angular.module('app')
  .factory('Members', function($http) {
    const baseUrl = 'https://galvanize-student-apis.herokuapp.com/gdating/';
    return {
      all: function() {
        return $http.get(baseUrl + 'members?limit=50').then(members => {
          return members.data.data;
        })
      },
      getUserById: function(id) {
        return $http.get(baseUrl + 'members/' + id).then(member => {
          return member.data.data
        })
      },
      getMatches: function(id) {
        return $http.get(baseUrl + 'members').then(members => {
          const peeps = members.data.data
          const results = [];
          for (i in peeps) {
            if (peeps[i]._matches === 'id') {
              results.push(peeps[i])
            }
          }
          return results;
        })
      }
    }
  })
