exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var timeoutID;

    function printNow() {
      console.log(start++);
      if(start<=end)
        timeoutID= setTimeout(printNow, 100);
    }

    printNow();

    return {
      cancel: function () {
        timeoutID && clearTimeout(timeoutID);
      }
    };
  }
};
