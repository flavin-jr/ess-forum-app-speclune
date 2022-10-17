Feature: Criar posts
As a usuário do fórum
I want to  criar e editar posts
so that eu possa contribuir e gerar críticas sobre o conteúdo que eu consumi


Scenario: adicionar um novo post com texto
Given eu estou logado com o usuário "bebeto09"
And eu estou na página "Meus posts"
When eu seleciono a opção "Criar Post"
And escrevo a frase "lol é muito bom #topdms" na caixa de texto
And eu seleciono a opção "Postar"
Then eu vejo na tela uma mensagem de sucesso
And eu ainda estou na página "Meus posts"
And eu vejo a frase "lol é muito bom #topdms" no topo da minha lista de posts

Scenario: adicionar um novo post sem texto
Given eu estou logado com o usuário "bebeto09"
And eu estou na página "Meus posts"
When eu seleciono a opção "Criar Post"
And escrevo a frase "" na caixa de texto
And eu seleciono a opção "Postar"
Then eu vejo na tela uma mensagem de erro
And eu ainda estou na página "Meus posts"
And eu nao vejo a frase "" na minha lista de posts

Scenario: editar um post existente com sucesso
Given eu estou logado com o usuário "bebeto09"
And eu estou na página "Meus posts"
And eu vejo uma lista de posts
When eu seleciono, no post mais recente, a opção "editar"
And eu substituo a frase do post por "lol é um lixo #Naojoguem"
And eu seleciono a opção "Salvar alterações"
Then eu vejo na tela uma mensagem de sucesso
And eu ainda estou na página "Meus posts"
And eu nao vejo a frase "lol é muito bom #topdms" na minha lista de posts
And eu vejo a frase "lol é um lixo #Naojoguem" no topo da minha lista de posts

Scenario: editar um post existente sem sucesso
Given eu estou logado com o usuário "bebeto09"
And eu estou na página "Meus posts"
And eu vejo uma lista de posts
When eu seleciono, no post mais recente, a opção "editar"
And eu substituo a frase do post por ""
And eu seleciono a opção "Salvar alterações"
Then eu vejo na tela uma mensagem de erro
And eu nao vejo a frase "" na minha lista de posts
And eu vejo a frase "lol é um lixo #Naojoguem" no topo da minha lista de posts

Scenario:  Cancelar a edição de um post existente 
Given eu estou logado com o usuário "bebeto09"
And eu estou na página "Meus posts"
And eu vejo uma lista de posts
When eu seleciono, no post mais recente, a opção "editar"
And eu substituo a frase do post por "lol é top"
And eu seleciono a opção "Cancelar"
Then eu vejo a frase "lol é um lixo #Naojoguem" no topo da minha lista de posts
And eu ainda estou na página "Meus posts"
