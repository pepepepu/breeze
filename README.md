# Breeze - Gestor Inteligente de Ar Condicionado

## 📜 Breve Descrição
Breeze é um aplicativo mobile desenvolvido para o gerenciamento e monitoramento de aparelhos de ar condicionado em um determinado local. O principal objetivo é facilitar a identificação de unidades com mau funcionamento ou que necessitam de manutenção, além de fornecer uma visão clara do status operacional (ligado, desligado, com defeito) de cada aparelho através de uma interface intuitiva com mapa interativo. O Breeze também permite simular controles básicos, auxiliando na gestão e otimização do uso desses equipamentos.

## 🚀 Status do Projeto
**Status:** 🚧 Em Desenvolvimento

## 🎬 Demonstração
*(Em breve)*

## 🎯 Objetivo do Projeto
Este projeto foi desenvolvido como parte do meu portfólio pessoal com o objetivo de demonstrar e aprimorar minhas habilidades em desenvolvimento mobile utilizando **React Native** e **TypeScript**. O foco foi criar uma aplicação funcional, com uma interface de usuário elegante e intuitiva, que abordasse um problema prático como o gerenciamento eficiente de aparelhos de ar condicionado, incluindo a identificação de unidades que necessitam de atenção.

## ✨ Funcionalidades Principais (Features)
* [ ] **Visualização no Mapa:** Ver todos os ACs cadastrados em um mapa interativo, com seus status (ligado/desligado/defeito) indicados por cores.
* [ ] **Detalhes e Controle do AC:** Acessar detalhes de um AC (nome, cômodo, temperatura simulada) e realizar ações básicas (ligar/desligar, ajustar temperatura simulada).
* [ ] **Gerenciamento de ACs (CRUD):** Adicionar, visualizar, editar e remover ACs (com informações de localização para o mapa).
* [ ] **Reportar Defeito:** Marcar um AC como "com defeito" e ver essa indicação visualmente no mapa e na lista de dispositivos.

## 🛠️ Tecnologias Utilizadas (Tech Stack)
* **React Native:** Framework principal para desenvolvimento mobile multiplataforma.
* **TypeScript:** Superset do JavaScript para tipagem estática, melhorando a manutenibilidade e a robustez do código.
* **React Navigation:** Para gerenciamento de navegação entre telas.
* **Redux (com Redux Toolkit recomendado):** Para gerenciamento de estado global da aplicação.
* **`react-native-maps`:** Para a funcionalidade de visualização no mapa.
* **ESLint & Prettier:** Para padronização e qualidade do código.

## 🚀 Como Executar o Projeto (Setup)
Este projeto utiliza o Expo, o que facilita a configuração e execução em diferentes plataformas.

### Pré-requisitos
Antes de começar, você precisará ter o seguinte instalado em sua máquina:
* **Node.js** (versão LTS recomendada - você pode verificar no [site oficial do Node.js](https://nodejs.org/))
* **npm** (geralmente vem com o Node.js) ou **Yarn** (gerenciador de pacotes alternativo)
* **Expo CLI:** Instale globalmente executando `npm install -g expo-cli` ou `yarn global add expo-cli`.
* **Aplicativo Expo Go** (opcional, mas recomendado para testes em dispositivos móveis):
    * Para Android: [Expo Go na Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
    * Para iOS: [Expo Go na Apple App Store](https://apps.apple.com/us/app/expo-go/id982107779)

### Passos para Instalação e Execução
1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU_USUARIO_GITHUB/breeze-app.git](https://github.com/SEU_USUARIO_GITHUB/breeze-app.git)
    cd breeze-app
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```
3.  **Configurações Específicas (se houver):**
    4.  **Inicie o servidor de desenvolvimento Expo:**
    ```bash
    npx expo start
    # ou
    yarn expo start
    ```
    Isso abrirá o Metro Bundler no seu navegador. A partir daí, você pode:
    * **Escanear o QR Code** com o aplicativo Expo Go no seu celular Android (ou iOS) para rodar o app no dispositivo.
    * Pressionar `a` no terminal para tentar abrir em um emulador Android (se configurado).
    * Pressionar `i` no terminal para tentar abrir em um simulador iOS (se estiver em um macOS e com Xcode configurado).
    * Pressionar `w` no terminal para abrir no navegador (para algumas funcionalidades).

## ✍️ Autor
* **[SEU NOME COMPLETO AQUI]**
    * GitHub: [@pepepepu](https://github.com/pepepepu)
    * LinkedIn: [Pedro Oliveira](https://www.linkedin.com/in/pp-oliveira)
    * Email: seu.email@example.com
