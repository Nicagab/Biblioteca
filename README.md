# Biblioteca de Livros

Fiz este projeto para um teste técnico de um processo seletivo, o objetivo era desenvolver uma aplicação básica em next.js para visualizar e cadastrar livros.

# Navegação

Fiz uma barra de navegação para tornar o site mais atrativo visualmente e ser mais fácil visualizar as rotas disponíveis. Clicando no título Biblioteca (que serve como logo do site) voltamos a Home page (/).
Ao clicar em cadastrar+, visualizasse a página de cadastro de livros (/cadastro)
Ao clicar em livros voltamos também a Home page (/)

# Páginas

O site possui 3 páginas principais.

## Home page (/): 

Aonde se encontra a lista de livros cadastrados. É possível filtrar os livros por título, autor ou ano, o filtro padrão é por título.

## Cadastro (/cadastro): 

Aonde é possível cadastrar novos livros.

## Detalhes (/livro/:id): 

Aqui vemos detalhes do livro anteriormente selecionado.

# Armazenamento

Para armazenar os livros utilizei do localStorage, assim os livros armazenados em determinado navegador ficam salvos para este. 

Uma possível feature seria adicionar um banco de dados ao site, permitindo que todos os usuários tenham acesso a qualquer livro cadastrado por qualquer usuário.

# Estilização e responsividade

É possível utilizar o site em qualquer dispositivo (Desktop, notebook, tablet ou mobile), entretanto o foco na estilização foi mínimo.

# Deploy no vercel

Você pode visualizar o resultado em: [biblioteca.app](biblioteca-ten-rho.vercel.app)
