# CashWise 

Nosso projeto para o PI3. Consiste em uma plataforma web 
que visa ensinar a educação financeira, e à ajudar no 
controle de gastos e um calculador de previdência. Tudo com 
um conteúdo mais leve, e com uma abordagem de "gameficação".

## Banco de dados MYSQL com ORM PRISMA

## Comando para inserção de dados do simule e da loja de ícones

```
npm run insert-data
```

### Comandinhos pra lembrar:

Faz a migração do schema para o dialeto do MYSQL
```
npx prisma migrate dev --name init
```

### Referência dos comandos
https://www.prisma.io/docs/guides/migrate/developing-with-prisma-migrate/troubleshooting-development

## Documentação real oficial do Zuztand

https://github.com/pmndrs/zustand/blob/main/docs/getting-started/introduction.md

### Trechozinhos para lembrar de como usar ele

#### Criação de um Store
```
import { create } from 'zustand';

const useCoxinhaStore = create((set) => ({
  coxinhas: 1000,
  comerCoxinha: () => set((state) => ({ coxinhas: state.coxinhas - 1 })),
  mandarCoxinhasPraDentro: () => set({ coxinhas: 0 }),
}));
```

#### Importações e definições no componente em que você quer usa-lo
```
// Atribuindo apenas o valor que está lá no Store //
function CoxinhasCounter() {
  const coxinhas = useStore((state) => state.coxinhas)
  return <h1>{coxinhas} Coxinhas na fryer</h1>
}

// Usar um método de dentro do Store, como o método comerCoxinha para diminuir em //
// 1 o número de coxinhas
function Controls() {
  const comerCoxinha = useStore((state) => state.comerCoxinha)
  return <button onClick={comerCoxinha}>Comer uma coxinha</button>
}
```