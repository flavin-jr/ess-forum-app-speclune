Feature: Criar posts
As a usuário do fórum
I want to  criar e editar posts
so that eu possa contribuir e gerar críticas sobre o conteúdo que eu consumi

Scenario: adicionar um novo post com sucesso
Given estou logado com o usuário "flavin_DoPneu123"
And eu estou na página "Meus posts"
And vejo a opção "Criar post"
when eu seleciono a "Criar post"
And escrevo a frase "lol é muito" na "caixa de texto"
And eu seleciono a opção "postar"
Then eu vejo na tela uma mensagem de sucesso
And eu ainda estou na página "Meus posts"
And eu vejo a frase "lol é muito bom #topdms" na minha lista de posts

Scenario: adicionar um novo post sem texto
Given estou logado com o usuário "flavin_DoPneu123"
And eu estou na página "Meus posts"
And vejo a opção "Criar post"
when eu seleciono a "Criar post"
And escrevo a frase "" na "caixa de texto"
And eu seleciono a opção "postar"
Then eu vejo na tela uma mensagem de erro
And eu ainda estou na página "Meus posts"
And eu nao vejo a frase "" na minha lista de posts

Scenario: editar um post existente com sucesso
Given estou logado com o usuário "flavin_DoPneu123"
And eu estou na página "Meus posts"
And eu vejo uma lista de posts
And eu vejo a opção "editar post"
when eu seleciono a "editar post"
And  eu substituo a frase "lol é muito bom #topdms" presente na "caixa de texto" pela frase "lol é um lixo #Naojoguem"
And eu seleciono a opção "Salvar alterações"
Then eu vejo na tela uma mensagem de sucesso
And eu ainda estou na página "Meus posts"
And eu nao vejo a frase "lol é muito bom #topdms" na minha lista de posts
And eu vejo a frase "lol é um lixo #Naojoguem" na minha  lista de posts

Scenario: editar um post existente sem sucesso
Given estou logado com o usuário "flavin_DoPneu123"
And eu estou na página "Meus posts"
And eu vejo uma lista de posts
And eu vejo a opção "editar post"
when eu seleciono a "editar post"
And  eu substituo a frase "lol é muito bom #topdms" presente na "caixa de texto" pela frase ""
And eu seleciono a opção "Salvar alterações"
Then eu vejo na tela uma mensagem de erro
And eu ainda estou na página "Meus posts"
And eu ainda vejo a frase "lol é muito bom #topdms" na minha lista de posts


 

