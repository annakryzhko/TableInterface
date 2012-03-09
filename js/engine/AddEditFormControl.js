var AddEditFormControl = function (config) {
    var self = this,
            ui_but_begin = $(config.but_begin),
            formview = $(config.formview),
            storage = config.storage,
            copy = null,
            Entity = config.Entity;

    ui_but_begin.click(onAdd);
    $(config.but_edit).live("click", onEdit);

    function onAdd(e) {
        showForm(config.addtext[0], config.addtext[1], function () { self.addEntity(); })
        e.preventDefault();
    }

    function onEdit(e) {
        var targ = e.target, index;
        index = $(targ).attr('data-index');
        var form = showForm(config.edittext[0], config.edittext[1], function () { self.editEntity(index); });
        var entity = storage.getEntity(index);
        serializeEntityToForm(entity, form);
        e.preventDefault();

    }

    function createEntityFromForm() {
        var entity = Entity.createEmpty();
        copy.find('[data-prop]').each(function (index, element) {
            var $elem = $(element);
            entity[$elem.attr('data-prop')] = $elem.rVal();
            //entity.addPropertyValue($elem.attr('data-prop'), $elem.val());
        });
        return entity;
    }

    function serializeEntityToForm(entity, form) {
        copy.find('[data-prop]').each(function (index, element) {
            var $elem = $(element);
            $elem.rVal(entity[$elem.attr('data-prop')]);
        });
        /*var prop, value;

        for (prop in entity) {
        if (entity.hasOwnProperty(prop)) {
        value = entity[prop];
        if (utils.array.isArray(value)) {
        copy.find('[data-prop="' + prop + '"]').each(function (index, element) {
        if (value[index]) {
        $(element).val(value[index]);
        $(element).parent().removeClass("ui-multiple-hide");
        }
        });
        }
        else {
        copy.find('[data-prop="' + prop + '"]').first().val(value);

        }
        }
        }*/
    }

    function showForm(title, but_name, callback) {
        copy = formview.clone(true, true);
        LightBox.clear();
        LightBox.addElement(copy);
        copy.find("h2").html(title);
        copy.find("input[type='submit']")
                   .val(but_name)
                   .click(callback);
        copy.show();
        LightBox.open();
        return copy;
    }

    this.editEntity = function (index) {
        var entity = createEntityFromForm();
        storage.update(index, entity);
        endOperation();
    }

    this.addEntity = function () {
        var entity = createEntityFromForm();
        storage.insert(entity);
        endOperation();
    }

    function endOperation() {
        LightBox.close();
        mediator.dataChanged();

    }

}
