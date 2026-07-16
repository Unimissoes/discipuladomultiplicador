# Discipulado Multiplicador

Landing page estática para divulgação e inscrição na **Capacitação em Discipulado**.

O site foi preparado para publicação no **GitHub Pages** e não depende de frameworks, banco de dados ou processo de compilação.

## Estrutura do projeto

```text
.
├── index.html
├── assets
│   ├── css
│   │   └── styles.css
│   └── js
│       └── script.js
├── .gitignore
├── .nojekyll
└── README.md
```

## Configuração obrigatória do WhatsApp

Abra o arquivo:

```text
assets/js/script.js
```

Localize:

```javascript
const WHATSAPP_NUMBER = "5500000000000";
```

Substitua pelo número responsável pelas inscrições, usando somente algarismos, com o código do país e o DDD.

Exemplo:

```javascript
const WHATSAPP_NUMBER = "5521999999999";
```

O formulário não armazena dados em servidor. Ao ser enviado, ele organiza as informações e abre uma conversa no WhatsApp com a mensagem preenchida.

## Testar no computador

Você pode abrir `index.html` diretamente no navegador. Para uma visualização mais próxima da hospedagem, execute na pasta do projeto:

```bash
python -m http.server 8000
```

Depois, acesse no navegador:

```text
http://localhost:8000
```

## Publicar pelo GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todo o conteúdo desta pasta para a raiz do repositório.
3. No repositório, abra **Settings**.
4. Acesse **Pages**.
5. Em **Build and deployment**, selecione **Deploy from a branch**.
6. Escolha a branch `main` e a pasta `/ (root)`.
7. Clique em **Save**.

Após a publicação, o GitHub mostrará o endereço público do site.

## Personalização

As cores principais estão no começo de `assets/css/styles.css`, dentro de `:root`.

Os textos e seções estão em `index.html`.

## Privacidade

O texto de consentimento informa que os dados serão usados para contato, inscrição e comunicação sobre a capacitação. Como o envio ocorre pelo WhatsApp, revise o aviso de privacidade de acordo com os procedimentos da organização antes da publicação oficial.
