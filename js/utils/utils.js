//local
var local  = {};
local.dayName = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
local.monthNames = ["январь", "февраль", "март", "апрель",
"май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь",
"декабрь"];
local.monthNamesRod = ["января", "февраля", "марта", "апреля",
"мая", "июня", "июля", "августа", "сентября", "октября", "ноября",
"декабря"];
local.indexByMonthNamesRod = {"января":"01",
                              "февраля":"02", 
                              "марта":"03", 
                              "апреля":"04",
                              "мая":"05", 
                              "июня":"06",
                              "июля":"07",
                              "августа":"08",
                              "сентября":"09",
                              "октября":"10", 
                              "ноября":"11",
                              "декабря":"12"};

local.formatDate = function (str) {
    var arr = str.split(".");
    return arr[0] + " " + local.monthNamesRod[parseInt(arr[1])] + " " + arr[2];
};

local.getDatestrFromLocal = function (localdate) {
    var arr;
    localdate = utils.string.trim(localdate);
    arr = localdate.split(/\s+/);
    arr[1] = local.indexByMonthNamesRod[arr[1]];
    return arr.join(".");

}

local.formatNumber = function (num) {
    var arr = [], numstr = num.toString();
    for (var i = numstr.length - 3; i > 0; i = i - 3) {
        arr.push(numstr.substr(i, 3));
    }
    arr.push(numstr.substr(0, i + 3));
    return arr.reverse().join(" ");
}

var utils = {};
utils.KEY = { ENTER: 13, UP: 38, DOWN: 40, ESC: 27 };


//array
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
                  return a[prop].length - b[prop].length;
              }
              break;
          default: break;
      }
      return fun;
  };
  //string
 utils.string = {}

 utils.string.filterPattern = function (string, pattern) {
      var re = new RegExp(pattern, "i");
      return re.test(string);
  };

  utils.string.xssDefend = function (str) {
      str = str.replace("<", "&lt;");
      str = str.replace(">", "&gt;");
      return str;
  }
  utils.string.trim  = function trim(str) {
	str = str.replace(/^\s+/, '');
	for (var i = str.length - 1; i >= 0; i--) {
		if (/\S/.test(str.charAt(i))) {
			str = str.substring(0, i + 1);
			break;
		}
	}
	return str;
}


//utils for pure js controls
utils.addEvent = function (elem, type, handler, isCaptured) {
    isCaptured = isCaptured || false;
    elem.addEventListener(type, handler, isCaptured);
}
utils.removeEvent = function (elem, type, handler, isCaptured) {
    isCaptured = isCaptured || false;
    elem.removeEventListener(type, handler, isCaptured);
}

utils.addClass = function (elem, classAdd) {
    if (!this.hasClass(elem, classAdd)) {
        elem.className += " " + classAdd;
    }
}

utils.hasClass = function (elem, class_) {
    var re = new RegExp("\\b" + class_ + "\\b", "gi");
    return re.test(elem.className);
}

utils.removeClass = function (elem, classReplace) {
    var re = new RegExp("\\b" + classReplace + "\\b", "gi");
    elem.className = elem.className.replace(re, "");
}
utils.createElement = function (tagName, className) {
    var elem = document.createElement(tagName);
    elem.className = className;
    return elem;
}
  