/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

enum ARCO_IRIS {
  VERMELHO = 'vermelho',
  LARANJA = 'laranja',
  AMARELO = 'amarelo',
  VERDE = 'verde',
  AZUL = 'azul',
  INDIGO = 'indigo',
  VIOLETA = 'violeta',
}

type Pessoa = {
    name: string,
    idade: number,
    corFavorita: ARCO_IRIS,
}

const pessoa1: Pessoa = {
  name: 'Gabigol',
  idade: 27,
  corFavorita: ARCO_IRIS.VERMELHO
}

const pessoa2: Pessoa = {
  name: 'Bruno Henrique',
  idade: 29,
  corFavorita: ARCO_IRIS.VERDE
}

const pessoa3: Pessoa = {
  name: 'Arrascaeta',
  idade: 26,
  corFavorita: ARCO_IRIS.AMARELO
}