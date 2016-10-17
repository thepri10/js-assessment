exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    var service = $.Deferred();
    setTimeout(function() {
      service.resolve(value);
    }, 10);
    return service.promise();
  },

  manipulateRemoteData: function(url) {
    var service = $.Deferred();

    $.ajax(url).then(function(resp) {
      var people = $.map(resp.people, function(person) {
        return person.name;
      });
      service.resolve(people.sort());
    });

    return service.promise();
  }
};
