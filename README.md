# Upfi
> Projeto de um site de upload de imagens

Projeto desenvolvido como um desafio do curso Ignite da Rocketseat, neste desafio foi disponibilizado um template com a estrutura e testes do projeto, com o objetivo de fazer um site funcional de upload e visualizações de imagens.

Os requisitos do desafio foram:
* Realizar uma infinite query com React Query e implantar um botão para carregamento de mais imagens.
* Formatar os dados recebidos da api para eliminar informações desnecessárias.
* Criar um grid com Chakra Ui para visualizão das imagens.
* Criar uma modal para visualização de apenas uma imagem e redirecionamento para o arquivo original.
* Criar um formulários com React Hook Form, utilizando validações da própria library e mutations do React Query para fazer a requisição POST.
* Mensagens de sucesso ou erro com Toasts do Chakra Ui


Link para o template do projeto:
https://github.com/rocketseat-education/ignite-template-reactjs-upload-de-imagens

![](../header.png)



## Exemplo de uso

![Alt Text](https://i.ibb.co/0XQRnRX/upfi-s.gif)


## Configuração para Desenvolvimento

O projeto está configurado para utilizar o FaunaDB e o ImgBB, é necessário ter uma conta nesses serviços e gerar uma chave de segurança em cada um deles, salvar as chaves em um arquivo .env.local com o seguinte padrão:

```md
NEXT_PUBLIC_IMGBB_API_KEY=*chave de segurança do ImgBB*
FAUNA_API_KEY=*chave de segurança do Fauna DB*
```


```sh
yarn
yarn test
```

## Tecnologias Utilizadas

* [Next.js](https://nextjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [React Hook Form](https://react-hook-form.com/)
* [Fauna DB](https://fauna.com/)
* [React Query](https://react-query.tanstack.com/)
* [Chakra UI](https://chakra-ui.com/)



## Meta

Lucas Fritschy – [@BaruelFritz](https://twitter.com/BaruelFritz) – lucasfritschy@gmail.com

[https://github.com/LucasFritschy](https://github.com/LucasFritschy/)
