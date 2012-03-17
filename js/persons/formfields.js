var formfields = [        

            { 'name': 'name_fld',
                'lbl': 'Имя',
                'type': 'text',
                'invalid': "Поле обязательно для заполнения",
                'attr': { 'data-prop': 'name',
                    'lbl': "required",
                    'style': 'min-width:80%;',
                    'required': 'required'
                }
            },

            { 'name': 'age_fld',
                'lbl': 'Возраст',
                'type': 'text',
                'className': 'ui-sliderinput',
                'attr': { 'data-min': 16, 'data-max': 70, 'data-step': 1, 'data-prop': 'age', 'style': 'width:30px; text-align:right; ' }

            },
            { 'name': 'salary_fld',
                'lbl': 'Зарплата',
                'type': 'text',
                'className': 'ui-sliderinput',
                'attr': { 'data-min': 0, 'data-max': 240000, 'data-step': 200, 'data-prop': 'salary', 'style': 'width:70px; text-align:right;' }
            },
            { 'name': 'city_fld',
                'lbl': 'Город',
                'type': 'text',
                'className': 'ui-autocomplete',
                'attr': { 'data-prop': 'city' }
            },
            { 'name': 'phone_fld',
                'lbl': 'Телефоны',
                'type': 'tel',
                'className': 'ui-multipleinput',
                'attr': { 'data-prop': 'phone', 'data-length': 5 }
            },
             { 'name': 'email_fld', 'lbl': 'Почта',
                 'type': 'email',
                 'invalid':'Введите корректный почтовый адрес',
                 'className': 'ui-multipleinput',
                 'attr': { 'data-prop': 'email', 'style': 'width:200px', 'data-length': 5 }
             },

            { 'name': 'site_fld', 'lbl': 'Сайты',
                'type': 'text',
                
                'invalid':'Введите корректный адрес сайта',
                'className': 'ui-multipleinput',
                'attr': { 'data-prop': 'site', 'style': 'width:200px', 'data-length': 5 }
            },

            { 'name': 'birth_date_fld',
                'lbl': 'Дата рождения',
                'type': 'text',
                'className': 'ui-calendarinput',
                'attr': { 'data-prop': 'localDate' }
            },
            { 'name': 'description_fld',
                'lbl': 'Описание',
                'elem': 'textarea',
                'attr': { 'data-prop': 'description', 'style': 'min-width:80%;' }
            }

    ];