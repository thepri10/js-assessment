exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for(let i=0; i<arr.length; i++)
      if(item === arr[i])
        return i;
    return -1;
  },

  sum: function(arr) {
    let sum=0;
    for(let i=0; i<arr.length; i++)
      sum+=arr[i];
    return sum;
  },

  remove: function(arr, item) {
    for(let i=0; i<arr.length; i++) {
      if(arr[i] === item) {
        arr.splice(i,1);
        i--;
      }
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    for(let i=0; i<arr.length; i++) {
      if(arr[i] === item) {
        arr.splice(i,1);
        i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.splice(arr.length-1,1);
    return arr;
  },

  prepend: function(arr, item) {
    arr.splice(0,0,item);
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0,1);
    return arr;
  },

  concat: function(arr1, arr2) {
    for(let i=0; i< arr2.length; i++)
      arr1.push(arr2[i]);
    return arr1;
  },

  insert: function(arr, item, index) {
    arr.splice(index,0,item);
    return arr;
  },

  count: function(arr, item) {
    let count=0;
    for(let i=0; i<arr.length; i++)
      if(arr[i]===item)
        count++;
    return count;
  },

  duplicates: function(arr) {
    function count(arr, item) {
      let count=0;
      for(let i=0; i<arr.length; i++)
        if(arr[i]===item)
          count++;
      return count;
    }

    function remove(arr, item) {
      for(let i=0; i<arr.length; i++) {
        if(arr[i] === item) {
          arr.splice(i,1);
          i--;
        }
      }
      return arr;
    }

    var duplicates=new Array();
    for(let i=0; i<arr.length; i++) {
      if(count(arr, arr[i])>1) {
        duplicates.push(arr[i]);
        arr=remove(arr,arr[i]);
      }
    }
    return duplicates;
  },

  square: function(arr) {
    var squaredArray=new Array();
    for(let i=0; i<arr.length; i++)
      squaredArray.push(arr[i]*arr[i]);
    return squaredArray;
  },

  findAllOccurrences: function(arr, target) {
    var occurrences=new Array();
    for(let i=0; i<arr.length; i++)
      if(arr[i] === target)
        occurrences.push(i);
    return occurrences;
  }
};
