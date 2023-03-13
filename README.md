# App

Cookpedia.


## RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível cadastrar uma receita;
- [x] Deve ser possível publicar uma receita;
- [ ] Deve ser possível buscar todas as receitas;
- [ ] Deve ser possível buscar as receitas recentes;
- [ ] Deve ser possível buscar as receitas em rascunho do usuário logado;
- [ ] Deve ser possível buscar as receitas publicadas do usuário logado;
- [ ] Deve ser possível buscar as receitas favoritas do usuário logado;


## RNs (Regras de negócio)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] A senha do usuário deve ser hashed;
- [ ] A senha do usuário deve conter no minimo 8 caracteres, sendo 1 número, 1 carater especial, 1 caracter minúsculo e maiusculo;
- [ ] O usuário não deve poder cadastrar uma receita com o mesmo nome | Revisar este requisito;

## RNFs (Requisitos não funcionais)

- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);
- [x] Os dados da aplicação devem ser persistidos em um banco MySQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página;