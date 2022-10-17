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
And eu vejo a frase "lol é muito bom #topdms" na minha lista de posts


