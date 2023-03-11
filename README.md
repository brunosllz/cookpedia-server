# App

Cookpedia.


## RFs (Requisitos funcionais)

- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível cadastrar uma receita;

## RNs (Regras de negócio)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] A senha do usuãrio deve ser hashed;
- [ ] A senha do usuãrio deve conter no minimo 8 caracteres, sendo eles 1 número, 1 carater especial, 1 caracter minúsculo;
- [ ] O usuário não deve poder cadastrar uma receita com o mesmo nome;

## RNFs (Requisitos não funcionais)

- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);
- [ ] Os dados da aplicação devem ser persistidos em um banco MySQL;