# Formulário de Registro com Captcha

Este é um projeto de exemplo que demonstra a criação de um formulário de registro com integração de reCAPTCHA do Google e a capacidade de salvar os dados em um banco de dados.

## Recursos

- Registro de usuário com validação de reCAPTCHA.
- Armazenamento de dados no banco de dados.
- Pergunta de segurança personalizável.
- Responsivo e fácil de usar.

## Pré-requisitos

- [reCAPTCHA Site Key](https://www.google.com/recaptcha) - Substitua `YOUR_RECAPTCHA_SITE_KEY` no arquivo `index.html` com a sua chave.
- Servidor back-end para lidar com a lógica de registro e banco de dados (não incluído neste exemplo).

## Uso

1. Clone este repositório:

   ```sh
   git clone https://github.com/weiner-rezcue98/formulario-de-registro.git


Personalize o arquivo index.html com seu YOUR_RECAPTCHA_SITE_KEY.

Configure um servidor back-end para lidar com o registro e salvar os dados no banco de dados.

Execute o aplicativo e teste o formulário de registro.

<h3>Estrutura de Banco de Dados</h3>
Este projeto pressupõe uma tabela users com a seguinte estrutura:

<code>
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  security_question_id INT NOT NULL,
  security_question_answer VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
</code>

Certifique-se de que o esquema da tabela em seu banco de dados corresponda a esta estrutura.

<h3>Contribuindo</h3>
Sinta-se à vontade para contribuir com melhorias, correções de bugs ou adicionar recursos adicionais. Abra um problema ou envie uma solicitação de pull.


<h3>Licença</h3>
Este projeto é livre


<strong>Nota:</strong> Este é um projeto de exemplo e não inclui todas as funcionalidades de segurança ou implementações em um aplicativo de registro real. Certifique-se de considerar as melhores práticas de segurança ao implementar em um ambiente de produção.

<code>

Lembre-se de personalizar o README com as informações específicas do seu projeto, como detalhes sobre o seu servidor back-end, informações de licença e outros detalhes relevantes. Isso ajudará outros desenvolvedores a entender e usar o seu projeto com facilidade.

</code>
