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
    { id: 8, fullName: 'William Smith', position: 'Designer', skill: '-', exp: 5, sex: 'Male', salary: 3000},
    { id: 9, fullName: 'Oliver Alien', position: 'PM', skill: '-', exp: 4, sex: 'Male', salary: 6000},
    { id: 10, fullName: 'Mia Morris', position: 'Owner', skill: '-', exp: 10, sex: 'Famale', salary: 10000},
];

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

const columns = ['ID', 'Full Name', 'Position', 'Tech', 'Exp', 'Sex', 'Salary'];
const slug = text => text.trim().split(' ').map(el => el.toLowerCase()).join('-');

//th-cols-up

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
        outputUserName.innerHTML = localStorage.getItem('auth');
        hideAuthorization();
        renderTableNode(columns,stuff);
        addEvListenerToTable();
    } else {
        showAuthorization();
    }
}


//sorting functions

const idHandleClick = () => {
    stuff.sort((a,b) => (stuff[0].id > stuff[1].id) ? a.id - b.id : b.id - a.id);
    removeEvListenerFromTable()
    renderTableNode(columns, stuff);
    addEvListenerToTable();
}

const fullNameHandleClick = () => {
    stuff.sort((a,b) => {
        if (stuff[0].fullName < stuff[stuff.length - 1].fullName) {
            return a.fullName.toLowerCase() < b.fullName.toLowerCase() ? 1 : a.fullName.toLowerCase() > b.fullName.toLowerCase() ? -1 : 0;
        }
        else {
            return a.fullName.toLowerCase() < b.fullName.toLowerCase() ? -1 : a.fullName.toLowerCase() > b.fullName.toLowerCase() ? 1 : 0;
        }
    });
    removeEvListenerFromTable();
    renderTableNode(columns, stuff);
    addEvListenerToTable();
}

const genderHandleClick = () => {
    stuff.sort((a,b) => {
        if (stuff[0].sex < stuff[stuff.length - 1].sex) {
            return a.sex.toLowerCase() < b.sex.toLowerCase() ? 1 : a.sex.toLowerCase() > b.sex.toLowerCase() ? -1 : 0;
        }
        else {
            return a.sex.toLowerCase() < b.sex.toLowerCase() ? -1 : a.sex.toLowerCase() > b.sex.toLowerCase() ? 1 : 0;
        }
    });
    removeEvListenerFromTable();
    renderTableNode(columns, stuff);
    addEvListenerToTable();
}

const positionHandleClick = () => {
    stuff.sort((a,b) => {
        if (stuff[0].position < stuff[stuff.length - 1].position) {
            return a.position.toLowerCase() < b.position.toLowerCase() ? 1 : a.position.toLowerCase() > b.position.toLowerCase() ? -1 : 0;
        }
        else {
            return a.position.toLowerCase() < b.position.toLowerCase() ? -1 : a.position.toLowerCase() > b.position.toLowerCase() ? 1 : 0;
        }
    });
    removeEvListenerFromTable();
    renderTableNode(columns, stuff);
    addEvListenerToTable();
}

const techHandleClick = () => {
    stuff.sort((a,b) => {
        if (stuff[0].skill < stuff[stuff.length - 1].skill) {
            return a.skill.toLowerCase() < b.skill.toLowerCase() ? 1 : a.skill.toLowerCase() > b.skill.toLowerCase() ? -1 : 0;
        }
        else {
            return a.skill.toLowerCase() < b.skill.toLowerCase() ? -1 : a.skill.toLowerCase() > b.skill.toLowerCase() ? 1 : 0;
        }
    });
    removeEvListenerFromTable();
    renderTableNode(columns, stuff);
    addEvListenerToTable();
}

const expHandleClick = () => {
    stuff.sort((a,b) => (stuff[0].exp > stuff[1].exp) ? a.exp - b.exp : b.exp - a.exp);
    removeEvListenerFromTable();
    renderTableNode(columns, stuff);
    addEvListenerToTable();
}

const salaryHandleClick = () => {
    stuff.sort((a,b) => (stuff[0].salary > stuff[1].salary) ? a.salary - b.salary : b.salary - a.salary);
    removeEvListenerFromTable();
    renderTableNode(columns, stuff);
    addEvListenerToTable();
}

function addEvListenerToTable () {
    document.getElementById('id').addEventListener('click', idHandleClick);
    document.getElementById('full-name').addEventListener('click', fullNameHandleClick);
    document.getElementById('position').addEventListener('click', positionHandleClick);
    document.getElementById('tech').addEventListener('click', techHandleClick);
    document.getElementById('exp').addEventListener('click', expHandleClick);
    document.getElementById('sex').addEventListener('click', genderHandleClick);
    document.getElementById('salary').addEventListener('click', salaryHandleClick);
}

function removeEvListenerFromTable () {
    document.getElementById('id').removeEventListener('click', idHandleClick);
    document.getElementById('full-name').removeEventListener('click', fullNameHandleClick);
    document.getElementById('position').removeEventListener('click', positionHandleClick);
    document.getElementById('tech').removeEventListener('click', techHandleClick);
    document.getElementById('exp').removeEventListener('click', idHandleClick);
    document.getElementById('sex').removeEventListener('click', genderHandleClick);
    document.getElementById('salary').removeEventListener('click', salaryHandleClick);
}



////////////////////////////////////


// const addEvListenerToTable = () => {
//     const id = document.getElementById('id');
//     const salary = document.getElementById('salary');
//     id.addEventListener('click', handleIdClick);
//     salary.addEventListener('click', handleSalaryClick);
// }

//main app

renderHeaderNode();
renderMainSectionNode();
renderAuthorizationNode();
renderFooterNode();

const logInBtn = document.getElementById('logInBtn');
const logOutBtn = document.getElementById('logOutBtn');
const outputUserName = document.getElementById('outputUserName');
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const submitBtn = document.getElementById('submitBtn');
const seePassword = document.getElementById('seePassword');

checkLoginStatus();

logInBtn.addEventListener('click', event => {
    document.getElementById('logInMessage').classList.add('hidden');
    loginForm.classList.remove('hidden');
})

logOutBtn.addEventListener('click', event => {
    localStorage.removeItem('auth');
    window.location.reload();
})

emailInput.addEventListener('input', event => {
    event.target.value = removeSpacesFromString(event.target.value);
    if (isEmailValid(event.target.value)) {
        event.target.classList.remove('is-invalid');
        event.target.classList.add('is-valid');
    } else {
        event.target.classList.add('is-invalid');
        event.target.classList.remove('is-valid');
    }
})

passwordInput.addEventListener('input', event => {
    event.target.value = removeSpacesFromString(event.target.value);
    if (isPasswordValid(event.target.value)) {
        event.target.classList.remove('is-invalid');
        event.target.classList.add('is-valid');
    } else {
        event.target.classList.add('is-invalid');
        event.target.classList.remove('is-valid');
    }
})

seePassword.addEventListener('click', () => {
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
})

loginForm.addEventListener ('submit', event => {
    event.preventDefault();
    let currentUser = userArray.filter(el => el.email === emailInput.value);
    if (currentUser.length == 1 && currentUser[0].password === passwordInput.value) {
        localStorage.setItem('auth', currentUser[0].name);
        outputUserName.innerHTML = localStorage.getItem('auth');
        loginForm.reset();
        hideAuthorization();
        renderTableNode(columns,stuff);
        addEvListenerToTable();
    } else if (currentUser.length == 1 && currentUser[0].password !== passwordInput.value) {
        renderUserMessage('warning', `${currentUser[0].name}, вы ввели неверный пароль!`) 
    } else {
        renderUserMessage('danger', 'Такого пользователя нет в системе');
    }  
})