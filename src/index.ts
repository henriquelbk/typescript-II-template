/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (TPerson) com as propriedades id, name, email, password e role;
2. Type Aliases para 2 contas (AdminAccount, NormalAccount) com as propriedades account e permission;
3. Crie exemplos de usuários Admin e Normal;
*/

type TPerson = {
    id: string,
    name: string,
    email: string,
    password: string,
}

enum USE_ROLE {
        ADMIN = 'admin',
        NORMAL = 'normal'
    }

type AdminAccount = {
    account: string,
    // permission: "admin"
    permission: USE_ROLE.ADMIN
}

type NormalAccount = {
    account: string,
    permission: USE_ROLE.NORMAL
}

const adminPo: AdminAccount = {
    account: "Henrique",
    // permission: "admin"
    permission: USE_ROLE.ADMIN
}

const usuarioPo: NormalAccount = {
    account: "Marcela",
    permission: USE_ROLE.NORMAL
}

/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL e atribua ã propriedade role do Tperson;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;
*/ 

// enum USE_ROLE {
//     ADMIN = 'admin',
//     NORMAL = 'normal'
// }

//Foi comentado pois precisa ser declarado antes dos types acima (linha 16).

type AdminUser = TPerson & AdminAccount 
type NormalUser = TPerson & NormalAccount 

const userAdm: AdminUser = {
    id: '001',
    name: 'fernand',
    email: "asjkcn@email.com",
    password: 'cadscvsw',
    account: "administrador",
    permission: USE_ROLE.ADMIN
}

const userComum: NormalUser = {
    id: '002',
    name: 'fernando',
    email: "sdacasn@email.com",
    password: 'wkjbks',
    account: "padrão",
    permission: USE_ROLE.NORMAL
}

//const clientes: (AdminUser | NormalUser)[]= []

const clientes: Array<AdminUser | NormalUser>= [
    {
        id: '001',
        name: 'fernand',
        email: "asjkcn@email.com",
        password: 'cadscvsw',
        account: "administrador",
        permission: USE_ROLE.ADMIN
    },
    {
        id: '002',
        name: 'fernando',
        email: "sdacasn@email.com",
        password: 'wkjbks',
        account: "padrão",
        permission: USE_ROLE.NORMAL
    }
]
