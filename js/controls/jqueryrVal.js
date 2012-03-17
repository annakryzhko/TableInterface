jQuery.fn.rVal = function (value) {
    if (this[0]) {
        var ele = $(this[0]);

        if (typeof value != 'undefined') {
            if (ele.hasClass("multipleinput")) {
                MultipleInputControl.setValue.call(ele, value);
            }
            else  {
             ele.val(value);
            }
        }
        else {
            if (ele.hasClass("multipleinput")) {
                return MultipleInputControl.getValue.apply(ele);
            }
             else {
                 return utils.string.xssDefend(ele.val());
            }
        }
    }
 };
