# Configurações Iniciais para Rodar o Projeto Localmente

## 1. Criar APP no Github

- Acesse [Github Apps](https://github.com/apps/)
- Crie um novo APP para habilitar o login via Github no seu projeto.
- Anote o `GITHUB_ID` e `GITHUB_SECRET` gerados para usar nas variáveis de ambiente.

## 2. Criar Conta e Habilitar API no RapidAPI

- Crie uma conta em [RapidAPI](https://rapidapi.com/)
- Habilite a [Sportsbook API](https://rapidapi.com/sportsbook-api-sportsbook-api-default/api/sportsbook-api2)
- Gere a sua `SPORTSBOOK_API_KEY` para usar no projeto.

## 3. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```bash
NEXTAUTH_URL=http://localhost:3000/
AUTH_SECRET= # sua chave secreta para autenticação
GITHUB_ID= # ID do APP Github criado
GITHUB_SECRET= # Secret do APP Github criado
NEXT_PUBLIC_NEXTAPI_URL=http://localhost:3000/api/

SPORTSBOOK_API_KEY= # chave da Sportsbook API
SPORTSBOOK_API_URL=https://sportsbook-api2.p.rapidapi.com
SPORTSBOOK_API_HOST=sportsbook-api2.p.rapidapi.com
```

## 4. Rodar o Projeto

Na raiz do projeto, execute:

```bash
npm run dev
```
