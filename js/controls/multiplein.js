function MultipleInput(selector) {
    var ui_cnts = $(selector);

    ui_cnts.each(function (index, element) {
        var $elem = $(element),
        max;

        this.max = $elem.attr('data-length');
        this.prop = $elem.attr('data-prop');
        this.ui_buts = [];
        this.ui_inputs = [];

        this.render = function () {

            var cnt;
            $elem.wrap("<div></div");
            this.ui_buts.push($("<input type='button' value='+'>"))
            this.ui_inputs.push($elem);
            this.ui_buts[0].insertAfter($elem);
            this.ui_buts[0].click(function (e) {
                var $targ = $(e.target);
                $targ
                    .siblings("div.hide")
                    .first()
                    .removeClass("hide");
                if (!$(targ).siblings("div.hide")) {
                    $targ.attr("disabled", true);
                }
            })
            for (var i = 1; i < this.max; i++) {
                this.ui_inputs[i] = $elem.clone(true, true);
                this.ui_buts[i] = $("<input type='button' value='-'>");
                cnt = $("<div class='hide'></div>");
                this.ui_inputs[i].appendTo(cnt); //insertAfter(this.ui_buts[i - 1]);
                this.ui_buts[i].appendTo(cnt); // insertAfter(this.ui_inputs[i])
                cnt.insertAfter(this.ui_buts[0]);
                this.ui_buts[i].click(function (e) {
                    var targ = e.target;
                    $(targ).parent().addClass("hide");
                    $(targ).parent().parent().find("input[value='+']").removeAttr("disabled");
                })
            }
           
        }

        this.render();
    });    
}