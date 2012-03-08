var TblStorage = function (name) {

    function getTKey(key) {
        return name + "_" + key;
    }

    this.insert = function (entity) {
        var entity_str = JSON.stringify(entity);
        new_index = parseInt(getLastIndex()) + 1;
        localStorage.setItem(getTKey(new_index), entity_str);
        setLastIndex(new_index);
        return new_index;
    }

    this.update = function (index, new_entity) {
        var entity_str = JSON.stringify(new_entity);
        localStorage.setItem(getTKey(index), entity_str);
    }

    this.getEntity = function (index) {
        var entity = null,
        entity_str = localStorage.getItem(getTKey(index));
        if (entity_str) {
            entity = JSON.parse(entity_str);
            entity.index = index;
        }

        return entity;
    }

    this.getAllEntities = function () {
        var i, entity, entityArr = [], last_index = getLastIndex();
        for (i = 0; i <= last_index; i++) {
            entity = this.getEntity(i);
            if (entity) {
                entityArr.push(entity);
            }
        }
        return entityArr;
    }

    this.insertArr = function (entityArr) {
        var i, lng = entityArr.length;
        for (i = 0; i < lng; i++) {
            entityArr[i].index = this.insert(entityArr[i]);
        }
        return entityArr;
    }

    function getLastIndex() {
        return localStorage.getItem(getTKey("lastIndex"));
    }
    function setLastIndex(val) {
        localStorage.setItem(getTKey("lastIndex"), val);
    }

    (function create() {
        if (!window.localStorage) {
            console.log("No support for localstorage");
            return;
        }
        if (!parseInt(getLastIndex())) {
            setLastIndex(0);
        }

    })();



}