var formfields = 
[
            { 'name': 'name_fld',
            'title': 'Имя',
            'type':'text',
            'attr':{'data-prop':'name', 'style':'width:10em;', 'required':"required"}
            }, 

            {'name':'age_fld', 
            'title':'Возраст', 
            'type':'text',
            'className':'ui-sliderinput',
            'attr':{'data-min':16, 'data-max':70, 'data-step':1, 'data-prop':'age'}
            
        },
            { 'name': 'salary_fld',
                'title': 'Зарплата',
                'type': 'text',
                'className': 'ui-sliderinput',
                'attr': { 'data-min': 0, 'data-max': 240000, 'data-step': 200, 'data-prop': 'salary'}
            },
            { 'name': 'city_fld',
                'title': 'Город', 
                'elem':'a',
                'className': 'ui-autocomplete',
                'attr': { 'data-prop': 'city' }            
            },
            { 'name': 'phone_fld',
                'title': 'Тел',
                'type': 'text',
                'className':'ui-multipleinput',
                'attr': { 'data-prop': 'phone', 'data-length':5 }
            },
             { 'name': 'email_fld', 'title': 'email',
               'type': 'text',
                 'className': 'ui-multipleinput',
                 'attr': { 'data-prop': 'email', 'data-length': 5 }
             },

            { 'name': 'site_fld', 'title': 'Сайты',
              'type': 'text',
                'className': 'ui-multipleinput',
                'attr': { 'data-prop': 'site', 'data-length': 5 }
            },

            { 'name': 'birth_date_fld',
                'title': 'Дата рождения',
                'type': 'text',
                'className': 'ui-calendarinput',
                'attr': { 'data-prop': 'birth_date' }
            },
            {'name':'description_fld',
                'title': 'Описание',
            'elem':'textarea',
            'attr': { 'data-prop': 'description' }
        }
           
    ];
    
var TestData = {
    cols: [{ 'name': 'name',
            'title': 'Имя',
            'sort': 'abc', 
             'sort_prop':'name'}, 
            {'name':'age', 'title':'Возраст', 'sort':'number', 'sort_prop':'age'},
            {'name':'salary', 'title':'Зарплата', 'sort':'number', 'sort_prop':'salary'},
            {'name':'city', 'title':'Город', 'sort':'abc',  'sort_prop':'city'},
            {'name':'phone', 'title':'Тел',  'sort':'length', 'sort_prop':'phone'},
            {'name': 'email', 'title': 'email',  'sort': 'length'  , 'sort_prop':'email'},
            {'name': 'site', 'title': 'Сайты',  'sort': 'length' , 'sort_prop':'site'},
            {'name':'birth_date', 'title':'Дата рождения', 'sort':'number', 'sort_prop':'dUTC'},
            {'name':'description','title':'Описание',  'sort':'abc', 'sort_prop':'description'}
            ],

        data: [ { 'name':'Андрей Иванов', 'age':'33', 'salary':'240000', 'city':'Бостон', 
                        'phone':['+1-650-678-5615', '039 23 56 89'], 
                        'email':['aivanov@ukr.net', 'aivanov@gmail.com'], 
                        'site': ['www.arg.com', 'www.derivan.com'], 
                        'birth_date':'25.01.1984', 
                        'description':'Клевый чувак' },
			    { 'name':'Иван Петров', 'age':'18', 'salary':'0', 'city':'Козятин', 
                        'phone':['080 039 39 39', '560 89 56'], 
                        'email': ['ipetrov@mail.ru'], 
                        'site': ['www.okna.com'], 
                        'birth_date':'01.01.1994', 'description':'Важный клиент, владелец сети гипермаркетов' },
				{ 'name':'Устиния Евдокимова', 'age':'70', 'salary':'10000', 'city':'Кировоград', 
                        'phone':['080 039 39 39', '560 89 56'],
                        'email': ['evdokim@ukr.net'], 
                        'site': ['www.money.com'], 
                        'birth_date':'28.02.1942', 'description' : '' },
				{ 'name':'Лиза Дорофеева', 'age':'16', 'salary':'3000', 'city':'Киев', 
                        'phone':['080 039 39 39', '039 23 23 23'],
                        'email': ['doro@gmail.com'], 
                        'site': ['www.varg.com', 'www.furniture.com'], 
                        'birth_date':'15.07.1995', 'description' : 'Учится в школе' },
				{ 'name':'Дарья Корнилова', 'age':'38', 'salary':'1000', 'city':'Нежин', 
                        'phone':['080 039 39 39', '560 89 56'],
                        'email': ['dkornilova@pisem.net', 'dkornilova@ukr.net', 'dkornilova@mail.com'], 
                        'site': ['www.class.com', 'www.fan.com'], 
                        'birth_date':'11.01.1974', 'description' : 'Актриса драматического театра' },
				{ 'name':'Глеб Дорожкин', 'age':'50', 'salary':'10505', 'city':'Днепропетровск', 
                        'phone':['080 039 39 39', '560 89 56'], 
                        'email': ['www.lanet.com'], 
                        'site': [], 
                        'birth_date':'12.01.1962', 'description' : '' },
				{ 'name':'Григорий Дворкин', 'age':'34', 'salary':'30000', 'city':'Львов', 
                        'phone': ['080 039 39 39', '449 39 56'],
                        'email': ['dvorkin@ukr.net'], 
                        'site': [],
                        'birth_date': '02.03.1978', 'description': 'нет данных'
                    },
				{ 'name':'Фредерик Колод', 'age':'24', 'salary':'1500', 'city':'Киев', 
                        'phone': ['080 039 39 39', '560 89 56'], 
                        'email': ['fkolod@gmail.com'], 
                        'site': [], 
                        'birth_date':'23.10.1988', 'description' : 'Беззвестный художник, скульптор и реставратор' },
				{ 'name':'Иван Дятлов', 'age':'66', 'salary':'0', 'city':'Львов', 
                        'phone':[ '560 89 56'],
                        'email': ['ivan123@mail.ru'],
                        'site': ['www.mmm.com'], 
                        'birth_date':'15.11.1976', 'description' : 'Известный режиссер' },
				{ 'name':'Сильва Козятина', 'age':'16', 'salary':'87456', 'city':'Житомир', 
                        'phone':['080 039 39 45'], 
                        'email': ['silva@opera.net'],
                        'site': ['www.varg.com', 'www.furniture.com'], 
                        'birth_date':'12.02.1986', 'description': 'Несочетаемое имя и фамилия'}
                ]
    };

    