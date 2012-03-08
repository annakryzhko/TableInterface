var Person = {
    createEmpty: function () {
        return new EmptyPerson();
    },
    addPropertyValue: function (prop, value) {
        switch (prop) {
            case 'phone':
            case 'email':
            case 'site':
                this[prop].push(value);
                break;
            case 'birth_date':
                this[prop] = value;
                if (value) {
                    this.calc_date();
                }
                break;
            default: this[prop] = value;
        }

    },
    calc_date: function () {
        var arr = this.birth_date.split(".");
        this.dUTC = Date.UTC(arr[2], arr[1] - 1, arr[0]);
        this.localDate = local.formatDate(this.birth_date);
    }
}

function EmptyPerson() {
    this.name= '';
    this.age= '';
    this.salary=  '';
    this.city= '';
    this.phone = [];
    this.email= [];
    this.site= [];
    this.birth_date = '';
    this.description =  '';
    this.localDate =  ''; 
    this.dUTC ='';

    };
    


EmptyPerson.prototype = Person;

    