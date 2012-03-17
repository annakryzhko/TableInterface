var Person = {
    createEmpty: function () {
        return new EmptyPerson();
    },
    calc_date: function () {
        var arr = this.birth_date.split(".");
        this.dUTC = Date.UTC(arr[2], arr[1] - 1, arr[0]);
        this.localDate = local.formatDate(this.birth_date);
    },    
    process: function () {
        this.birth_date = local.getDatestrFromLocal(this.localDate);
        var arr = this.birth_date.split(".");
        this.dUTC = Date.UTC(arr[2], arr[1] - 1, arr[0]);
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

    