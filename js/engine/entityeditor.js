var EntityEditor = function (config) {
    var self = this,
        ui_but_begin = $(config.but_begin),
        formview = $(config.formview),
        storage = config.storage,
        Entity = config.Entity;

    ui_but_begin.click(onAdd);
    $(config.but_edit).live("click", onEdit);

    function onAdd(e) {
        showForm(config.addtext[0], config.addtext[1], function (e) {
            e.preventDefault();
            self.addEntity();
        });
    }

    function onEdit(e) {
        var targ = e.target, index;
        index = $(targ).attr('data-index');
        showForm(config.edittext[0], config.edittext[1], function (e) {
            e.preventDefault();
            self.editEntity(index);
        });
        var entity = storage.getEntity(index);
        serializeEntityToForm(entity);
        e.preventDefault();

    }

    function createEntityFromForm() {
        var entity = Entity.createEmpty();
        formview.find('[data-prop]').each(function (index, element) {
            var $elem = $(element);
            entity[$elem.attr('data-prop')] = $elem.rVal();
        });
        Entity.process.apply(entity);
        return entity;
    }

    function serializeEntityToForm(entity) {
        formview.find('[data-prop]').each(function (index, element) {
            var $elem = $(element);
            $elem.rVal(entity[$elem.attr('data-prop')]);
            $elem.trigger("change");
        });
    }

    function showForm(title, but_name, callback) {
        formview.removeClass("ui-invalid-form");
        formview.find("form")[0].reset();
        LightBox.clear();
        LightBox.addElement(formview);
        formview.find("h2").html(title);
        formview.find("input[type='submit']")
                   .val(but_name)
                   .off('click')
                   .on('click', callback);
        formview.show();
        LightBox.open();
    }

    this.editEntity = function (index) {
        if (formview.find("form")[0].checkValidity()) {
            var entity = createEntityFromForm();
            storage.update(index, entity);
            endOperation();
        }
        else {
            formview.addClass("ui-invalid-form");
        }
    }

    this.addEntity = function () {
        if (formview.find("form")[0].checkValidity()) {
            var entity = createEntityFromForm();
            storage.insert(entity);
            endOperation();
        }
        else {
            formview.addClass("ui-invalid-form");
        }
    }

    function endOperation() {
        LightBox.close();
        formview.hide().appendTo(document.body);
        mediator.dataChanged();

    }

}
