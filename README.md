<div style="text-align: center">
  <h1 align="center"><img src="Front-End/assets/img/logoReadme.png" alt="logo" width="33" height="33">TaskFlow</h1>
  <p align="center">
    <img
      src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge" />
  </p>
</div>
<div>
  <p align="justify">O <b>TaskFlow</b> é um projeto que visa facilitar a colaboração entre <b>desenvolvedores</b> por
    meio de tarefas
    colaborativas. Durante a cadeira de <b>Sistemas Distribuídos</b>, fomos desafiados a desenvolver uma aplicação que
    atendesse a uma série de especificações:
  </p>
</div>
<div align="justify">
  <h3><b>Requisitos principais:</b></h3>
  <pre align="justify">
&#x2022 <b>Envio de dados utilizando Sockets TCP ou Datagrama UDP.</b>
</pre>
  <p align="justify">O TaskFlow utiliza a biblioteca <a href="https://socket.io/docs/v4/"
      target="_blank"><b>Socket.IO</b></a> para
    permitir uma comunicação bidirecional em tempo real entre <b>clientes</b> e <b>servidor</b> através de
    <b>WebSockets</b>, garantindo eficiência e confiabilidade no envio e recebimento de dados entre os desenvolvedores
    conectados ao sistema.</p>
  <pre align="justify">
&#x2022 <b>Protocolo Requisição/Resposta.</b>
</pre>
  <p>No TaskFlow, o protocolo <b>HTTP</b> será utilizado para gerenciar as <b>requisições</b> e <b>respostas</b> entre
    os clientes e o servidor. Os clientes enviarão requisições <b>HTTP</b> para o servidor, que processará essas
    solicitações e enviará as respostas correspondentes de volta aos clientes.</p>
  <pre align="justify">
&#x2022 <b>Representação externa de dados.</b>
</pre>
  <p>O TaskFlow utiliza o <a href="https://www.mongodb.com/docs/" target="_blank"><b>MongoDB</b></a> como banco de dados
    para armazenar e recuperar os dados do sistema. O MongoDB é um banco de dados <b>NoSQL</b> que trabalha com
    documentos <b>JSON</b>, o que facilita a representação externa dos dados. Os desenvolvedores podem interagir com o
    banco de dados MongoDB para armazenar informações relacionadas a tarefas, usuários, mensagens e outros dados
    relevantes do sistema.</p>
  <pre align="justify">
&#x2022 <b>Comunicação por filas.</b>
</pre>
  <p>O Taskflow utiliza o <a href="https://redis.io/docs/"><b>Redis</b></a> em conjunto com <a href="https://jwt.io/introduction"><b>JWT</b></a> para o armazenamento de sessão. O JWT é usado para autenticação e autorização, enquanto o Redis é utilizado como um banco de dados em memória para armazenar as informações da sessão dos usuários. Essa combinação permite a autenticação segura dos usuários e o armazenamento eficiente das informações da sessão no Redis. </p>
</div>
<div>
  <h3><b>Requisitos específicos:</b></h3>
  <p><b>Privacidade:</b></p>
  <pre>
&#x2022 Garantir a privacidade dos dados dos usuários e tarefas no sistema.
</pre>
  <p><b>Confiabilidade:</b></p>
  <pre>
&#x2022 Assegurar a confiabilidade na transmissão e armazenamento dos dados.
</pre>
  <p><b>Escalabilidade:</b></p>
  <pre>
&#x2022 Permitir que o sistema seja escalável e capaz de lidar com um grande número de usuários e tarefas.
</pre>
</div>
<h2>Link para o Projeto 🌐</h2>
<div style="display: inline_block">
  &#x2022 https://ally-matias.github.io/Task-Flow/
</div>
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
