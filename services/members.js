angular.module('app')
  .factory('Members', function($http, $q, $window) {
    const baseUrl = 'https://galvanize-student-apis.herokuapp.com/gdating/';
    return {
      all: function(n) {
        return $http.get(baseUrl + 'members?limit=' + n).then(members => {
          return members.data.data;
        })
      },
      getUserById: function(id) {
        return $http.get(baseUrl + 'members/' + id).then(member => {
          return member.data.data
        })
      },
      getMatches: function() {
        const user = JSON.parse($window.localStorage.getItem('user'));
        const matches = user._matches;
        const pUsers = [];
        for (i in matches) {
          pUsers.push($http.get(baseUrl + 'members/' + matches[i]));
        }
        return $q.all(pUsers)
      },
      getMatched: function(id) {
        return $http.get(baseUrl + 'members').then(members => {
          const peeps = members.data.data
          console.log(peeps);
          const results = [];
          for (i in peeps) {
            if (peeps[i]._matches === 'id') {
              results.push(peeps[i])
            }
          }
          return results;
        })
      },
      match: function(user, matchedId) {
        const matches = user._matches
        const i = matches.indexOf(matchedId);
        if (i > -1) {
          matches.splice(i, 1);
        } else {
          matches.push(matchedId);
        }
        return $http.put(baseUrl + 'members/' + user._id, JSON.stringify({"_matches": matches})).then(stuff => {
          return stuff;
        })
      },
      getConvos: function(id, recId) {
        if (id && recId) {
          return $http.get(baseUrl +'members/'+ id + '/conversations/' + recId)
        } else if (id) {
          return $http.get(baseUrl +'members/'+ id + '/conversations')
        } else {
          const user = JSON.parse($window.localStorage.getItem('user'))
          return $http.get(baseUrl + 'members/' + user._id + '/conversations')
        }
      },
      sendMessage: function(id, _recipient, content) {
        return $http.post(baseUrl + 'members/' + id + '/conversations', {_recipient, content}).then(data => {
          console.log(data);
        }).catch(err => {
          console.log(err);
        })
      },
      search: function(term) {
        console.log(term);
        return $http.get(baseUrl + 'members/search?username=' + term).then(data => {
          console.log(data);
          return data.data.data
        }).catch(err => {
          console.log(err);
        })
      }
    }
  })
