
# Desafio Leadster

Bem-vindo ao repositório do desafio técnico de front-end da empresa Leadster.

![App Screenshot](https://leadster.com.br/img/leadster/leadster.svg)

# Descrição do Projeto

Este projeto consiste na criação de uma landing page utilizando o framework Next.js. O objetivo é desenvolver uma página inicial atraente e responsiva, de acordo com o layout e o conteúdo fornecidos.




# Estrutura do código

A estrutura do código deste projeto segue uma abordagem organizada e modular, visando facilitar a manutenção, a escalabilidade e a compreensão do projeto.

Componentização
A landing page foi componentizada em quatro componentes principais:

**Hero :**

Este componente é responsável por exibir o cabeçalho da página, com um título e o call to action.

**Content :**

O componente Content é responsável por exibir o conteúdo principal da página. Aqui, são exibidos os filtros os cards e os modals.

**Reviews :**

O componente Reviews é responsável por exibir as avaliações.

**Footer :**

O componente Footer é responsável por exibir o rodapé da página.

Nomenclatura BEM
Foi adotada a nomenclatura BEM (Block, Element, Modifier) na escolha dos nomes das classes CSS. A nomenclatura BEM é uma convenção que ajuda a manter a consistência e a clareza no código CSS.

Testes
Os testes foram separados por componente e por página, facilitando a manutenção e a execução dos testes.

Essa estrutura modular e organizada contribuiu para um código mais legível, reutilizável e fácil de dar manutenção. Ao dividir a landing page em componentes independentes, é possível modificar ou adicionar funcionalidades específicas sem afetar outras partes do projeto. Isso resulta em um desenvolvimento mais eficiente e uma melhor experiência de usuário.
## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:FranciscoCosta/Leadster.git
```

Entre no diretório do projeto

```bash
  cd leadster
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```

Abra o navegador 

```bash
  http://localhost:3000/
```


Rodar os Testes

```bash
  npm run test
```



## Stacks utilizada

**Desnvolvimento:** Next.js, Typescript

**Test:** Jest

**Estilo/Animação** : Tailwindcss , headlessUI , framer-motion




## Escolha das teconologias

Neste projeto, foram selecionadas diversas tecnologias para a sua implementação, cada uma com um propósito específico. A seguir, explicarei as razões por trás das escolhas feitas.

**Next.js**

A escolha de utilizar o Next.js como framework para o desenvolvimento deste projeto foi baseada em sua versatilidade e praticidade. O Next.js oferece uma abordagem eficiente para a criação de aplicações web modernas, fornecendo recursos avançados, como renderização do lado do servidor (SSR) e geração de páginas estáticas (SSG). Além disso, o fato de o Next.js ser uma tecnologia solicitada no teste técnico reforçou a sua escolha.

**TypeScript**

A escolha de utilizar TypeScript como linguagem de programação também foi influenciada pela descrição do projeto. O TypeScript é uma linguagem que adiciona recursos de tipagem estática ao JavaScript, proporcionando maior segurança e prevenção de erros durante o desenvolvimento. Além disso, o TypeScript é amplamente utilizado e possui uma comunidade ativa, o que facilita a resolução de problemas e a manutenção do código.

**TailwindCSS**

Apesar de ter pouca experiência com o Tailwind CSS, decidi escolhê-lo como framework de estilização neste projeto. O Tailwind CSS é uma ferramenta interessante devido à sua abordagem utilitária, que permite a criação de estilos de forma rápida e eficiente, com uma grande variedade de classes pré-definidas. Ao escolher o Tailwind CSS, busco não apenas atender aos requisitos do layout fornecido, mas também expandir meus conhecimentos e explorar uma nova ferramenta.

**Framer Motion**

A escolha de utilizar o Framer Motion para as animações no projeto foi baseada em minha experiência prévia com essa biblioteca. O Framer Motion é uma biblioteca popular e poderosa para a criação de animações em componentes React. Com ela, é possível adicionar transições suaves, efeitos de paralaxe e muito mais, agregando um toque dinâmico e interativo ao projeto.

**Jest**

Para a realização dos testes neste projeto, optei por utilizar o Jest como ferramenta de teste. O Jest é um framework de teste JavaScript amplamente utilizado e reconhecido por sua simplicidade e eficiência. Com ele, é possível escrever testes unitários e de integração para garantir que o código desenvolvido esteja funcionando corretamente, mantendo a qualidade e a confiabilidade do projeto.
## Autor

- [Francisco Costa](https://github.com/FranciscoCosta/)
