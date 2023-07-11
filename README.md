<div style="text-align: center">
  <h1 align="center"><img src="Frontend/src/assets/img/logoReadme.png" alt="logo" width="33" height="33"> TaskFlow</h1>
  <p align="center">
    <img
      src="http://img.shields.io/static/v1?label=STATUS&message=%20FINALIZADO&color=GREEN&style=for-the-badge" />
  </p>
</div>
<div>
  <p align="center">O <b>TaskFlow</b> é um projeto que visa facilitar a colaboração entre <b>desenvolvedores</b> por
    meio de tarefas colaborativas. 
  </p>
</div>

---

## 🚀 Execução:

1. Faça um clone desse repositório rodando: <br> `git clone https://github.com/Ally-Matias/Task-Flow.git`;
2. Entre na pasta rodando pelo terminal: `cd Task-Flow`;
3. Rode `npm install` para instalar as dependências do projeto;
4. Rode na pasta FrontEnd `npm run dev` para iniciar o frontend do projeto.
5. Para rodar o banco de dados, o MongoDB pode ser executado em um contêiner do Docker, após instalar e configurar o mesmo, use esse comando para iniciar: `sudo docker run -p 27017:27017 -d mongo`
6. Rode na pasta BackEnd `nodemon server.js` para iniciar o backend do projeto.
   
---

## 🗂 Documentação:

<a href="https://wobbly-saturday-dd1.notion.site/Documenta-o-API-240b8d69da114400b1a99bda0bd2d87a" target="_blank"><b>Notion</b></a>

---
<div align="justify">
  <h3><b>📌 Requisitos principais:</b></h3>
  <pre align="justify">
&#x2022 <b>Envio de dados utilizando Sockets TCP.</b>
</pre>
  <p align="justify">O TaskFlow utiliza a biblioteca <a href="https://socket.io/docs/v4/"
      target="_blank"><b>Socket.IO</b></a> para permitir uma comunicação bidirecional em tempo real entre <b>clientes</b> e <b>servidor</b> através de <b>WebSockets</b>, garantindo eficiência e confiabilidade no envio e recebimento de dados entre os desenvolvedores conectados ao sistema.</p>
  <pre align="justify">
&#x2022 <b>Protocolo Requisição/Resposta.</b>
</pre>
  <p>No TaskFlow, o protocolo <b>HTTP</b> será utilizado para gerenciar as <b>requisições</b> e <b>respostas</b> entre os clientes e o servidor. Os clientes enviarão requisições <b>HTTP</b> para o servidor, que processará essas solicitações e enviará as respostas correspondentes de volta aos clientes.</p>
  <pre align="justify">
&#x2022 <b>Representação externa de dados.</b>
</pre>
  <p>O TaskFlow utiliza o <a href="https://www.mongodb.com/docs/" target="_blank"><b>MongoDB</b></a> como banco de dados para armazenar e recuperar os dados do sistema. O MongoDB é um banco de dados <b>NoSQL</b> que trabalha com documentos <b>JSON</b>, o que facilita a representação externa dos dados. Os desenvolvedores podem interagir com o banco de dados MongoDB para armazenar informações relacionadas a tarefas, usuários, mensagens e outros dados relevantes do sistema.</p>
</div>

---

<div>
  <h3><b>📌 Requisitos específicos:</b></h3>
  <p><b> 🔷 Privacidade:</b></p>
  <pre>
&#x2022 Garantir a privacidade dos dados dos usuários e tarefas no sistema.
</pre>
  <p align="justify">Para garantir a privacidade dos dados, o TaskFlow utiliza diversas tecnologias, incluindo:</p>
  <ul>
    <li><b>bcrypt:</b> Uma biblioteca para criptografia de senhas, que permite armazenar senhas de forma segura no banco de dados.</li>
    <li><b>jsonwebtoken:</b> Implementação de JSON Web Tokens (JWT) para autenticação e autorização, garantindo que apenas usuários autenticados tenham acesso a determinados recursos.</li>
    <li><b>helmet:</b> Um middleware do Express que ajuda a proteger a aplicação configurando vários cabeçalhos HTTP relacionados à segurança.</li>
    <li><b>Certificados SSL/TLS:</b> Tanto no frontend quanto no backend, utilizamos certificados SSL/TLS para estabelecer conexões seguras e criptografadas entre o cliente e o servidor. Essa criptografia de ponta a ponta protege a privacidade dos dados durante a transmissão, garantindo que as informações sejam acessadas apenas pelo remetente e pelo destinatário pretendidos.</li>
  </ul>
  
  <p><b> 🔷 Confiabilidade:</b></p>
  <pre>
&#x2022 Assegurar a confiabilidade na transmissão e armazenamento dos dados.
</pre>
  <p align="justify">Para garantir a confiabilidade na transmissão e armazenamento dos dados, o TaskFlow utiliza as seguintes tecnologias:</p>
  <ul>
    <li><b>Socket.IO:</b> Permite a comunicação em tempo real entre clientes e servidor, garantindo a entrega eficiente e confiável dos dados.</li>
    <li><b>MongoDB:</b> Um banco de dados NoSQL altamente confiável, que fornece recursos de replicação e balanceamento de carga para garantir a disponibilidade e confiabilidade dos dados.</li>
    <li><b>Express:</b> Um framework web confiável para construir APIs RESTful, oferecendo uma base sólida para a comunicação segura entre o cliente e o servidor.</li>
    <li><b>bcrypt:</b> Uma biblioteca para criptografia de senhas, garantindo a segurança dos dados armazenados.</li>
    <li><b>jsonwebtoken:</b> Implementação de JSON Web Tokens (JWT) para autenticação e autorização dos usuários, garantindo a integridade e autenticidade das informações transmitidas.</li>
  </ul>
  
  <p><b> 🔷 Escalabilidade:</b></p>
  <pre>
&#x2022 Permitir que o sistema seja capaz de lidar com um grande número de usuários e tarefas.
</pre>
  <p align="justify">Para garantir a escalabilidade do sistema, o TaskFlow utiliza as seguintes tecnologias e práticas:</p>
  <ul>
    <li><b>MongoDB:</b> Com sua arquitetura flexível e escalável, o MongoDB permite que o sistema lide com um grande volume de dados e suporte a um número crescente de usuários e tarefas.</li>
    <li><b>Node.js:</b> Com seu modelo de E/S não bloqueante e orientação a eventos, o Node.js permite um processamento eficiente e escalável das requisições, possibilitando a resposta rápida mesmo com um grande número de usuários.</li>
    <li><b>Express:</b> Um framework leve e rápido que ajuda a construir APIs escaláveis, fornecendo uma base sólida para o gerenciamento de rotas e manipulação de requisições.</li>
  </ul>
</div>

---

<div>
  <h3><b>💻 Stack do Projeto:</b></h3>
  <p><b>Frontend:</b></p>
  <ul>
    <li><a href="https://reactjs.org" target="_blank">React</a> - Biblioteca JavaScript para construção da interface do usuário.</li>
    <li><a href="https://reactrouter.com" target="_blank">React Router</a> - Roteamento para aplicativos React.</li>
    <li><a href="https://styled-components.com" target="_blank">Styled Components</a> - Biblioteca para estilização de componentes com CSS-in-JS.</li>
    <li><a href="https://axios-http.com" target="_blank">Axios</a> - Cliente HTTP para realizar requisições para o servidor.</li>
    <li><a href="https://github.com/developit/mitt" target="_blank">Mitt</a> - Gerenciador de eventos para comunicação interna entre os componentes.</li>
  </ul>
  <p><b>Backend:</b></p>
  <ul>
    <li><a href="https://nodejs.org" target="_blank">Node.js</a> - Ambiente de execução JavaScript do lado do servidor.</li>
    <li><a href="https://expressjs.com" target="_blank">Express</a> - Framework web para construção de APIs RESTful.</li>
    <li><a href="https://www.mongodb.com" target="_blank">MongoDB</a> - Banco de dados NoSQL para armazenamento e recuperação de dados.</li>
    <li><a href="https://socket.io/docs/v4" target="_blank">Socket.IO</a> - Biblioteca para comunicação em tempo real usando WebSockets.</li>
    <li><a href="https://www.npmjs.com/package/bcrypt" target="_blank">bcrypt</a> - Biblioteca para criptografia de senhas.</li>
    <li><a href="https://www.npmjs.com/package/jsonwebtoken" target="_blank">jsonwebtoken</a> - Implementação de JSON Web Tokens (JWT) para autenticação e autorização.</li>
  </ul>
</div>

<!--
<h2>Stack do Projeto 🚀</h2>
<div style="display: inline_block">
  <img align="center" alt="logo" height="45" width="45"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
  <img align="center" alt="logo" height="45" width="45"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />
  <img align="center" alt="logo" height="45" width="45"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
  <img align="center" alt="logo" height="45" width="45"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
  <img align="center" alt="logo" height="45" width="45"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
  <img align="center" alt="logo" height="45" width="45"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
</div>

-->

<h2>Autores</h2>
<div>
  <table>
    <tr>
      <td>
        <a href="https://github.com/Ally-Matias">
          <img src="https://avatars.githubusercontent.com/u/98532868?v=4" alt="Alliquison Matias da Silva"
            width="100px">
          <br>
          <sub><b>Alliquison Matias</b></sub>
        </a>
      </td>
      <td>
        <a href="https://github.com/bandeirapk">
          <img src="https://avatars.githubusercontent.com/u/85970097?v=4" alt="Antônio Bandeira Magalhães Neto"
            width="100px">
          <br>
          <sub><b>Antônio Bandeira</b></sub>
        </a>
      </td>
      <td>
        <a href="https://github.com/joaopaulonr">
          <img src="https://avatars.githubusercontent.com/u/106177735?v=4" alt="João Paulo N. Rodrigues" width="100px">
          <br>
          <sub><b>João Paulo</b></sub>
        </a>
      </td>
    </tr>
  </table>
</div>
