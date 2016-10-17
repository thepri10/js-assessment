exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(text) {
      return str + ', ' + text;
    };
  },

  makeClosures: function(arr, fn) {
    var ret = [];

    var newFn = function(value) {
      return function() { return fn(value); };
    };

    for (var i = 0; i < arr.length; i++)
      ret.push(newFn(arr[i]));

    return ret;
  },

  partial: function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3);
    };
  },

  useArguments: function() {
    var sum = 0;

    for (var i = 0; i < arguments.length; i++)
      sum += arguments[i];

    return sum;
  },

  callIt: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function() {
      var additionalArgs = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, additionalArgs);
    };
  },

  curryIt: function(fn) {
    function applyArguments(_fn, args) {
      return _fn.apply(null, args);
    }

    function getArgAccumulator(accumulatedArgs, expectedArgsCount) {
      return function (currentArgument) {
        accumulatedArgs.push(currentArgument);

        var allArgumentsProvided = accumulatedArgs.length === expectedArgsCount;

        if (allArgumentsProvided)
          return applyArguments(fn, accumulatedArgs);

        return getArgAccumulator(accumulatedArgs, expectedArgsCount);
      };
    }

    return getArgAccumulator([], fn.length);
  }
};
