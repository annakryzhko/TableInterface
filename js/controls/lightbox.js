var LightBox = {
    ui_modal_cnt: null,
    ui_modal: null,
    init: function () {
        var self = this;
        this.ui_modal_cnt = $("<div class='ui-modal-container'></div")
                    .append("<div class='ui-modal-bg'></div><div class='ui-modal'><a class='ui-modal-close'>X</a><div class='ui-modal-content'></div></div>")
                    .appendTo(document.body);
        this.close();
        this.ui_modal = $("div.ui-modal-content");
        $("a.ui-modal-close").click(function () { self.close(); });
    },
    close: function () {
        this.ui_modal_cnt.hide();
    },
    open: function () {
        this.ui_modal_cnt.show();
    },
    clear: function () {
        this.ui_modal.html(""); 
    },
    addElement: function (elem) {
        elem.appendTo(this.ui_modal);
    }
};

LightBox.init();