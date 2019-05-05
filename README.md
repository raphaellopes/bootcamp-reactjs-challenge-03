# Desafio 3

Neste desafio foi construido uma aplicação utilizando a biblioteca
React Map GL da Uber. A aplicação se trata de um repositório de localização
de desenvolvedores. O usuário pode adicionar desenvolvedores ao mapa clicando
sobre o mesmo e informando o username do Github do desenvolvedor, dessa forma,
a aplicação capta os dados do dev via API e salva no estado do Redux.

## Layout desta aplicação:

![Listagem](/assets/listagem.png)


## Fluxo

1. O usuário acessa a aplicação;
2. O usuário clica sobre o mapa para adicionar um novo usuário à posição clicada;
3. Um modal abre sobre a tela com um único campo, o username do Github;
4. A aplicação busca informações como nome e avatar do usuário da API do Github
   e salva os dados no store do Redux;
5. O usuário adicionado aparece no mapa e na lista lateral;
6. Caso o usuário digitado no input seja inválido uma mensagem de erro é
   retornada, assim como se tudo ocorrer bem ele recebe uma mensagem de sucesso;
7. É possível excluir usuários da listagem clicando sobre o “x” na sidebar;


## Rodar o projeto local

```
git clone https://github.com/raphaellopes/bootcamp-reactjs-challenge-03.git
cd bootcamp-reactjs-challenge-03/

yarn && yarn start
```
