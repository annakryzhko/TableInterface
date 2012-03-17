var MultipleInputControl = {
   
    setValue: function (value) {
        this.find("input[type!='button']").each(function (index, element) {
            if (value[index]) {
                $(element).val(value[index]);
                $(element).parent().removeClass("ui-multiple-hide");
            }
            else {
                $(element).val();
                if (index != 0) {
                    $(element).parent().addClass("ui-multiple-hide");
                }
            }
        });
    },
    getValue: function () {
        var value = [];
        this.find("input[type!='button']").each(function (index, element) {
            var vali = $(element).val();
            if (vali) {
                value.push(vali);
            }


        });
        return value;
    }
}

function MultipleInput(selector) {
    var ui_cnts = $(selector),
    hide_class = "ui-multiple-hide";

    ui_cnts.each(function (index, element) {
        var $elem = $(element),
        max;

        this.max = $elem.attr('data-length');
        this.prop = $elem.attr('data-prop');
        this.ui_buts = [];
        this.ui_inputs = [];

        this.init = function () {
            var cnt, mi, inv, inv_clone;

            $elem.wrap('<div data-prop="' + this.prop + '"  class="multipleinput" />');
            mi = $elem.parent();
            inv = mi.next("span.ui-invalid");
            
            $elem.removeAttr('data-prop')
            .removeAttr('data-length');
            this.ui_buts.push($("<input type='button' value='+' class='ui-multiple-but'>"))
            this.ui_inputs.push($elem);
            this.ui_buts[0].insertAfter($elem);
            this.ui_buts[0].click(plusClick);
            inv.insertAfter($elem);
            for (var i = 1; i < this.max; i++) {
                this.ui_inputs[i] = $elem.clone(true, true);
                this.ui_buts[i] = $("<input type='button' value='-'  class='ui-multiple-but'>");
                cnt = $("<div class='" + hide_class + "'></div>");
                inv_clone = inv.clone();
                this.ui_inputs[i].appendTo(cnt);
                inv_clone.appendTo(cnt);
                this.ui_buts[i].appendTo(cnt);
                
                cnt.insertAfter(this.ui_buts[0]);
                this.ui_buts[i].click(minusClick)
            }

        }

        function plusClick(e) {
            var $targ = $(e.target);
            $targ
                    .siblings("div." + hide_class)
                    .first()
                    .removeClass(hide_class);
            if (!$targ.siblings("div." + hide_class).length) {
                $targ.attr("disabled", "disabled");
            }

        }

        function minusClick(e) {
            var $targ = $(e.target);
            $targ.prevAll("input[type!='button']").last().val("");
            $targ.parent().addClass(hide_class);
            $targ.parent().parent().find("input[value='+']").removeAttr("disabled");

        }
        this.init();
    });
}