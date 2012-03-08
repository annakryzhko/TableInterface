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
        showForm("Добавить пользователя", "Добавить", function () { self.addEntity(); })
        e.preventDefault();
    }

    function onEdit(e) {
        var targ = e.target, index;
        index = $(targ).attr('data-index');
        var form = showForm("Редактировать пользователя", "Сохранить", function () { self.editEntity(index); });
        var entity = storage.getEntity(index);
        serializeEntityToForm(entity, form);
        e.preventDefault();

    }

    function createEntityFromForm() {
        var entity = Entity.createEmpty();
        copy.find('[data-prop]').each(function (index, element) {
            var $elem = $(element);
            entity.addPropertyValue($elem.attr('data-prop'), $elem.val());
        });
        return entity;
    }

    function serializeEntityToForm(entity, form) {
        copy.find('[data-prop]').each(function (index, element) {
            var $elem = $(element);
            $elem.val(entity[$elem.attr('data-prop')]);
        });
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
