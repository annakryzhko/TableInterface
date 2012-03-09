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
                MultipleInputControl.getValue.apply(ele);
            }
             else {
                return ele.val();
            }
        }
    }
 };
