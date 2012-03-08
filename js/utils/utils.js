var local  = {};
local.dayName = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
local.monthNames = ["январь", "февраль", "март", "апрель",
"май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь",
"декабрь"];
local.monthNamesRod = ["января", "февраля", "марта", "апреля",
"мая", "июня", "июля", "августа", "сентября", "октября", "ноября",
"декабря"];

local.formatDate = function (str) {
    var arr = str.split(".");
    return arr[0] + " " + local.monthNamesRod[parseInt(arr[1])] + " " + arr[2];
};

local.formatNumber = function (num) {
    var arr = [], numstr = num.toString();
    for (var i = numstr.length - 3; i > 0; i = i - 3) {
        arr.push(numstr.substr(i, 3));
    }

    arr.push(numstr.substr(0, i + 3));
    return arr.reverse().join(" ");
}

var utils = {};
utils.array = {}

utils.array.isArray= function(obj) {
    return obj.constructor == Array;
}
utils.array.search = function (arr, prop, val) {
    var elem = null, i = 0;
    while (arr[i]) {
        if (arr[i][prop] == val) {
            elem = arr[i];
            break;
        }
        i++;
    }
    return elem;
}
utils.array.unique = function (arr) {
      var a = [];
      var l = arr.length;
      for (var i = 0; i < l; i++) {
          for (var j = i + 1; j < l; j++) {
              if (arr[i] === arr[j])
                  j = ++i;
          }
          a.push(arr[i]);
      }
      return a;
  };

  utils.string = {}
 utils.string.filterPattern = function (string, pattern) {
      var re = new RegExp("^" + pattern, "i");
      return re.test(string);
  };

  utils.array.getSortFun = function (prop, type) {
      var fun = null;

      switch (type) {
          case "number":
              fun = function (a, b) { return a[prop] - b[prop]; }
              break;
          case "abc":
              fun = function (a, b) {
                  return (a[prop] > b[prop]) ? 1 : -1 * !(a[prop] == b[prop]);
              }
              break;
          case "yesno":
              fun = function (a, b) {
                  return (a[prop] && b[prop]) ? 0 : a[prop] && !b[prop];
              }
              break;
          case "length":
              fun = function (a, b) {
                  return a[prop].length -  b[prop].length;
              }
              break;
          default: break;
      }
      return fun;
  };