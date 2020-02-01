//backend data
const userArray = [
    {email: 'test@gmail.com', password: '666666', name: 'Дмитрий'},
    {email: 'alex@gmail.com', password: '666666', name: 'Александр'},
    {email: 'vlad@gmail.com', password: '666666', name: 'Владислав'},
    {email: 'anna@gmail.com', password: '666666', name: 'Анна'},
    {email: 'admin@gmail.com', password: '00000', name: 'Администратор'}
];

const stuff = [
    { id: 1, fullName: 'Oleh Lev', position: 'Web Dev', skill: 'PHP,JS', exp: 3, sex: 'Male', salary: 4500},
    { id: 2, fullName: 'John White', position: 'Web Dev', skill: 'PHP', exp: 1, sex: 'Male', salary: 1200},
    { id: 3, fullName: 'Jany Rad', position: 'Sale', skill: '-', exp: 2, sex: 'Famale', salary: 3500},
    { id: 4, fullName: 'Ivan Brown', position: 'iOS', skill: 'Swift', exp: 3, sex: 'Male', salary: 4000},
    { id: 5, fullName: 'Pet Bool', position: 'Android', skill: 'Java', exp: 2, sex: 'Male', salary: 3520},
    { id: 6, fullName: 'Emma Hallo', position: 'Android', skill: 'Kotlin', exp: 1, sex: 'Famale', salary: 2520},
    { id: 7, fullName: 'Olivia Jones', position: 'iOS', skill: 'Objective-C', exp: 3, sex: 'Famale', salary: 2820},
    { id: 8, fullName: 'William Smith', position: 'Designer', skill: 'Figma', exp: 5, sex: 'Male', salary: 3000},
    { id: 9, fullName: 'Oliver Alien', position: 'PM', skill: '-', exp: 4, sex: 'Male', salary: 6000},
    { id: 10, fullName: 'Mia Morris', position: 'Owner', skill: '-', exp: 10, sex: 'Famale', salary: 10000},
    { id: 11, fullName: 'Jeremy Clarkson', position: 'Driver', skill: '', exp: 5, sex: 'Male', salary: 2000},
    { id: 12, fullName: 'Samuel Faber', position: 'Web Dev', skill: '-', exp: 8, sex: 'Male', salary: 6000},
    { id: 13, fullName: 'Victoria Newton', position: 'Web Dev', skill: 'PHP, JS', exp: 7, sex: 'Famale', salary: 4200},
    { id: 14, fullName: 'Anastasia Willis', position: 'Android', skill: 'Kotlin', exp: 3, sex: 'Famale', salary: 3200},
    { id: 15, fullName: 'Lucas Archibald', position: 'Web Dev', skill: 'React', exp: 4, sex: 'Male', salary: 9000},
];

const columns = ['ID', 'Full Name', 'Position', 'Tech', 'Exp', 'Sex', 'Salary'];
const slug = text => text.trim().split(' ').map(el => el.toLowerCase()).join('-');

// render DOM
const createHTMLNode = (tag, attrs, inner) => {
    const element = document.createElement(tag);
    attrs.map(attr => {element.setAttribute(attr.name, attr.value.join(' '))});
    inner ? (Array.isArray(inner) ? inner.map(el => element.appendChild(el)) : element.innerHTML=inner) : null;
    return element;
};

const renderHeaderNode = () => {
    const logo = createHTMLNode ('div', [{name: 'class', value:['header-logo']}], [createHTMLNode ('h3', [], 'Staff table')]);
    const login = createHTMLNode ('div', [{name: 'class', value:['header-login']}], [
        createHTMLNode ('span', [{name: 'id', value:['outputUserName']}], null),
        createHTMLNode ('button', [{name: 'type', value:['button']}, {name: 'id', value:['logInBtn']}, {name: 'class', value:['btn', 'btn-info']}], 'Log In'),
        createHTMLNode ('button', [{name: 'type', value:['button']}, {name: 'id', value:['logOutBtn']}, {name: 'class', value:['btn', 'btn-danger', 'hidden']}], 'Log Out'),
    ]);
    const col = createHTMLNode ('div', [{name: 'class', value:['col', 'header-col']}], [logo, login])
    const row = createHTMLNode ('div', [{name: 'class', value:['row']}], [col])
    const container = createHTMLNode ('div', [{name: 'class', value:['container']}], [row])
    const header = createHTMLNode ('header', [], [container]);
    document.getElementById('app').appendChild(header);
};

const renderMainSectionNode = () => {
    const outpAuth = createHTMLNode ('div', [{name: 'id', value:['outputAuthorization']}], null);
    const outpData = createHTMLNode ('div', [{name: 'id', value:['outputData']}], null);
    const col = createHTMLNode ('div', [{name: 'class', value:['col']}], [outpAuth ,outpData])
    const row = createHTMLNode ('div', [{name: 'class', value:['row']}], [col])
    const container = createHTMLNode ('div', [{name: 'class', value:['container']}], [row])
    const main = createHTMLNode ('main', [], [container]);
    document.getElementById('app').appendChild(main);
}

const renderFooterNode = () => {
    const span = createHTMLNode ('span', [], `&#169 dmitrijpedan.github.io, ${new Date().getFullYear()}`);
    const col = createHTMLNode ('div', [{name: 'class', value:['col']}], [span])
    const row = createHTMLNode ('div', [{name: 'class', value:['row']}], [col])
    const container = createHTMLNode ('div', [{name: 'class', value:['container']}], [row])
    const footer = createHTMLNode ('footer', [], [container]);
    document.getElementById('app').appendChild(footer);
};

const renderAuthorizationNode = () => {
    const title = createHTMLNode ('div', [{name: 'class', value:['form-group__title']}], [
        createHTMLNode ('h4', [], 'Авторизация'),
        createHTMLNode ('p', [], '(admin@gmail.com, 00000)')
    ]);
    const formGroup1 = createHTMLNode ('div', [{name: 'class', value:['form-group']}], [
        createHTMLNode ('label', [{name: 'for', value:['emailInput']}], 'Email:'),
        createHTMLNode ('input', [{name: 'type', value:['email']}, {name: 'class', value:['form-control']}, {name: 'id', value:['emailInput']}, {name: 'aria-describedby', value:['emailHelp']}], null),
        createHTMLNode ('div', [{name: 'class', value:['invalid-feedback']}], 'Email не менее 3 символов и @.')
    ]);
    const formGroup2 = createHTMLNode ('div', [{name: 'class', value:['form-group']}], [
        createHTMLNode ('label', [{name: 'for', value:['passwordInput']}], 'Пароль:'),
        createHTMLNode ('div', [{name: 'class', value:['passwordWrapper']}], [
            createHTMLNode ('input', [{name: 'type', value:['password']}, {name: 'class', value:['form-control']}, {name: 'id', value:['passwordInput']}], null),
            createHTMLNode ('button', [{name: 'type', value:['button']}, {name: 'class', value:['eye-btn']}, {name: 'id', value:['seePassword']}], [
                createHTMLNode ('i', [{name: 'class', value:['fas fa-eye-slash']}], null)
            ]),
            createHTMLNode ('div', [{name: 'class', value:['invalid-feedback']}], 'Пароль не менее 5 символов.')
        ])
    ]);
    const subBtn = createHTMLNode ('button', [{name: 'type', value:['submit']}, {name: 'class', value:['btn', 'btn-info', 'form-group__btn']}, {name: 'id', value:['submitBtn']}], 'Log In');
    const resBtn = createHTMLNode ('button', [{name: 'type', value:['reset']}, {name: 'class', value:['btn', 'btn-danger', 'form-group__btn']}], 'Clear form');
    const form = createHTMLNode ('form', [{name: 'id', value:['loginForm']},{name: 'class', value:['hidden']}], [title, formGroup1, formGroup2, subBtn, resBtn]);
    document.getElementById('outputAuthorization').appendChild(form);
}

const renderMessageAuthorizationNode = () => {
    const message = createHTMLNode ('div', [{name: 'class', value:['alert', 'alert-warning']},{name: 'role', value:['alert']}, {name: 'id', value:['logInMessage']}], 'Для авторизации нажмите "Log In"');
    document.getElementById('outputAuthorization').appendChild(message);
}

const renderTableNode = (headCols, dataRows) => {
    document.getElementById('outputData').innerHTML = '';
    const trHead = createHTMLNode('tr', [], null);
    headCols.map(el => trHead.appendChild(createHTMLNode('th', [{ name: 'id', value: [slug(el)]}, { name: 'class', value: ['th-cols-flat']}], el)));
    const thead = createHTMLNode('thead', [], [trHead]);
    const tbody = createHTMLNode('tbody', [], null);
    dataRows.map(el => {
        const trTbody = createHTMLNode('tr', [], null);
        Object.keys(el).map(elName => trTbody.appendChild(createHTMLNode('td', [], el[elName])))
        tbody.appendChild(trTbody);
    })
    const table = createHTMLNode('table', [{ name: 'class', value: ['table'] }], [thead, tbody]);
    const title = createHTMLNode('div', [{ name: 'class', value: ['table-title']}], [
        createHTMLNode('h1', [], 'Staff table')
    ]);
    const container = createHTMLNode('div', [{ name: 'class', value: ['container'] }], [
        createHTMLNode('div', [{ name: 'class', value: ['row'] }], [
            createHTMLNode('div', [{ name: 'class', value: ['col-12'] }], [title, table])
        ]),
    ]);
    document.getElementById('outputData').appendChild(container);
}

const renderUserMessage = (type, text) => {
    const div = createHTMLNode ('div', [{name: `class`, value:[`alert`, `alert-${type}`]}], `${text}`);
    document.getElementById('outputData').innerHTML = "";
    document.getElementById('outputData').appendChild(div);
    (setTimeout(() => document.getElementById('outputData').innerHTML = "", 3000));
}

// functions

const removeSpacesFromString = str => str.split('').filter(el => el !== ' ').join('');

const isPasswordValid = (password) => {
    removeSpacesFromString(password).length >= 5 ? res = true : res = false ;
    return res;
}

const isEmailValid = (email) => {
    let at = email.split('').filter(el => el !== ' ' && el == '@');
    removeSpacesFromString(email).length > 3 && at.length == 1 ? res = true : res = false ;
    return res;
}

const hideAuthorization = () => {
    logInBtn.classList.add('hidden');
    loginForm.classList.add('hidden');
    logOutBtn.classList.remove('hidden');
}

const showAuthorization = () => {
    renderMessageAuthorizationNode();
    logInBtn.classList.remove('hidden');
    logOutBtn.classList.add('hidden');
}

const checkLoginStatus = () => {
    if (!!localStorage.getItem('auth')) {
        document.getElementById('outputUserName').innerHTML = localStorage.getItem('auth');
        hideAuthorization();
        renderTableNode(columns,stuff);
        fullNameHandleClick();
    } else {
        showAuthorization();
    }
}

//sorting functions

const changeArrowInSortedTh = (el, key) => {
    document.getElementById(el).classList.remove('th-cols-flat');
    key ? document.getElementById(el).classList.add('th-cols-down') : document.getElementById(el).classList.add('th-cols-up') ;
}

const idHandleClick = () => {
    const flag = (stuff[0].id > stuff[1].id);
    stuff.sort((a,b) => flag ? a.id - b.id : b.id - a.id);
    removeEvListenerFromTable();
    renderTableNode(columns, stuff);
    addEvListenerToTable();
    changeArrowInSortedTh('id', flag)
}

const fullNameHandleClick = () => {
    const flag = (stuff[0].fullName > stuff[stuff.length - 1].fullName);
    console.log(flag)
    stuff.sort((a,b) => {
        if (flag) {
            return a.fullName.toLowerCase() < b.fullName.toLowerCase() ? -1 : a.fullName.toLowerCase() > b.fullName.toLowerCase() ? 1 : 0;  
        }
        else {
            return a.fullName.toLowerCase() < b.fullName.toLowerCase() ? 1 : a.fullName.toLowerCase() > b.fullName.toLowerCase() ? -1 : 0;
        }
    });
    removeEvListenerFromTable();
    renderTableNode(columns, stuff);
    addEvListenerToTable();
    changeArrowInSortedTh('full-name', flag)
}

const positionHandleClick = () => {
    const flag = (stuff[0].position > stuff[stuff.length - 1].position);
    stuff.sort((a,b) => {
        if (flag) {
            return a.position.toLowerCase() < b.position.toLowerCase() ? -1 : a.position.toLowerCase() > b.position.toLowerCase() ? 1 : 0;
        }
        else {
            return a.position.toLowerCase() < b.position.toLowerCase() ? 1 : a.position.toLowerCase() > b.position.toLowerCase() ? -1 : 0;
        }
    });
    removeEvListenerFromTable();
    renderTableNode(columns, stuff);
    addEvListenerToTable();
    changeArrowInSortedTh('position', flag);
}

const genderHandleClick = () => {
    const flag = (stuff[0].sex > stuff[stuff.length - 1].sex);
    stuff.sort((a,b) => {
        if (flag) {
            return a.sex.toLowerCase() < b.sex.toLowerCase() ? -1 : a.sex.toLowerCase() > b.sex.toLowerCase() ? 1 : 0;
        }
        else {
            return a.sex.toLowerCase() < b.sex.toLowerCase() ? 1 : a.sex.toLowerCase() > b.sex.toLowerCase() ? -1 : 0;
        }
    });
    removeEvListenerFromTable();
    renderTableNode(columns, stuff);
    addEvListenerToTable();
    changeArrowInSortedTh('sex', flag);
}

const techHandleClick = () => {
    const flag = (stuff[0].skill > stuff[stuff.length - 1].skill);
    stuff.sort((a,b) => {
        if (flag) {
            return a.skill.toLowerCase() < b.skill.toLowerCase() ? -1 : a.skill.toLowerCase() > b.skill.toLowerCase() ? 1 : 0;
        }
        else {
            return a.skill.toLowerCase() < b.skill.toLowerCase() ? 1 : a.skill.toLowerCase() > b.skill.toLowerCase() ? -1 : 0;
        }
    });
    removeEvListenerFromTable();
    renderTableNode(columns, stuff);
    addEvListenerToTable();
    changeArrowInSortedTh('tech', flag);
}

const expHandleClick = () => {
    const flag = (stuff[0].exp > stuff[1].exp);
    stuff.sort((a,b) => (flag) ? a.exp - b.exp : b.exp - a.exp);
    removeEvListenerFromTable();
    renderTableNode(columns, stuff);
    addEvListenerToTable();
    changeArrowInSortedTh('exp', flag);
}

const salaryHandleClick = () => {
    const flag = (stuff[0].salary > stuff[1].salary);
    stuff.sort((a,b) => flag ? a.salary - b.salary : b.salary - a.salary);
    removeEvListenerFromTable();
    renderTableNode(columns, stuff);
    addEvListenerToTable();
    changeArrowInSortedTh('salary', flag);
}

// Authorization functions

const handlerLoginBtn = () => {
    document.getElementById('logInMessage').classList.add('hidden');
    loginForm.classList.remove('hidden');
    logInBtn.setAttribute('disabled', 'disabled');
}

const handlerLogOutBtn = () => {
    localStorage.removeItem('auth');
    window.location.reload();
}

const handlerEmailInput = () => {
    event.target.value = removeSpacesFromString(event.target.value);
    if (isEmailValid(event.target.value)) {
        event.target.classList.remove('is-invalid');
        event.target.classList.add('is-valid');
    } else {
        event.target.classList.add('is-invalid');
        event.target.classList.remove('is-valid');
    }
}

const handlerPasswordInput = () => {
    event.target.value = removeSpacesFromString(event.target.value);
    if (isPasswordValid(event.target.value)) {
        event.target.classList.remove('is-invalid');
        event.target.classList.add('is-valid');
    } else {
        event.target.classList.add('is-invalid');
        event.target.classList.remove('is-valid');
    }
}

const handlerVisibilityPassw = () => {
    let attr = passwordInput.getAttribute('type');
    if (attr === 'password') {
        passwordInput.setAttribute('type', 'text');
        seePassword.innerHTML = "";
        seePassword.appendChild(createHTMLNode ('i', [{name: 'class', value:['fas', 'fa-eye']}], null));
    } else {
        seePassword.innerHTML = "";
        passwordInput.setAttribute('type', 'password');
        seePassword.innerHTML = "";
        seePassword.appendChild(createHTMLNode ('i', [{name: 'class', value:['fas', 'fa-eye-slash']}], null));
    }
}

const handlerSubmitAuthForm = () => {
    event.preventDefault();
    let currentUser = userArray.filter(el => el.email === emailInput.value);
    if (currentUser.length == 1 && currentUser[0].password === passwordInput.value) {
        localStorage.setItem('auth', currentUser[0].name);
        document.getElementById('outputUserName').innerHTML = localStorage.getItem('auth');
        loginForm.reset();
        hideAuthorization();
        removeEvListenerFromAuthorization();
        renderTableNode(columns,stuff);
        fullNameHandleClick();
    } else if (currentUser.length == 1 && currentUser[0].password !== passwordInput.value) {
        renderUserMessage('warning', `${currentUser[0].name}, вы ввели неверный пароль!`) 
    } else {
        renderUserMessage('danger', 'Такого пользователя нет в системе');
    }  
}

// Event Listener functions

const addEvListenerToTable = () => {
    document.getElementById('id').addEventListener('click', idHandleClick);
    document.getElementById('full-name').addEventListener('click', fullNameHandleClick);
    document.getElementById('position').addEventListener('click', positionHandleClick);
    document.getElementById('tech').addEventListener('click', techHandleClick);
    document.getElementById('exp').addEventListener('click', expHandleClick);
    document.getElementById('sex').addEventListener('click', genderHandleClick);
    document.getElementById('salary').addEventListener('click', salaryHandleClick);
}

const removeEvListenerFromTable = () => {
    document.getElementById('id').removeEventListener('click', idHandleClick);
    document.getElementById('full-name').removeEventListener('click', fullNameHandleClick);
    document.getElementById('position').removeEventListener('click', positionHandleClick);
    document.getElementById('tech').removeEventListener('click', techHandleClick);
    document.getElementById('exp').removeEventListener('click', idHandleClick);
    document.getElementById('sex').removeEventListener('click', genderHandleClick);
    document.getElementById('salary').removeEventListener('click', salaryHandleClick);
}

const addEvListenerToAuthorization = () => {
    document.getElementById('logInBtn').addEventListener('click', handlerLoginBtn);
    document.getElementById('logOutBtn').addEventListener('click', handlerLogOutBtn);
    document.getElementById('loginForm').addEventListener ('submit', handlerSubmitAuthForm);
    document.getElementById('emailInput').addEventListener('input', handlerEmailInput);
    document.getElementById('passwordInput').addEventListener('input', handlerPasswordInput);
    document.getElementById('seePassword').addEventListener('click', handlerVisibilityPassw);
}

const removeEvListenerFromAuthorization = () => {
    document.getElementById('logInBtn').removeEventListener('click', handlerLoginBtn);
    document.getElementById('loginForm').removeEventListener ('submit', handlerSubmitAuthForm);
    document.getElementById('emailInput').removeEventListener('input', handlerEmailInput);
    document.getElementById('passwordInput').removeEventListener('input', handlerPasswordInput);
    document.getElementById('seePassword').removeEventListener('click', handlerVisibilityPassw);
}

//main app

renderHeaderNode();
renderMainSectionNode();
renderAuthorizationNode();
renderFooterNode();
checkLoginStatus();
addEvListenerToAuthorization();
