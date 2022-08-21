Feature: Buscar posts
    As a Usuário que possui uma conta no software
    I want to Buscar posts
    so that Eu possa buscar posts já criados

Scenario: Buscar posts por texto que existe
Given estou logado com o usuário "juanzin"
    And estou na página "publicações"
    And existe uma "publicação" com o conteudo "lol é muito"
    And vejo um campo "Pesquisar por texto"
    And vejo a opção "Buscar"
When escrevo a frase "lol é muito" na "Pesquisar por texto"
    And seleciono a opção "Buscar"
Then Eu estou na página "publicações"
    And vejo "publicações" com o conteudo "lol é muito" logo abaixo

Scenario: Buscar posts por texto que não existe
Given estou logado com o usuário "juanzin"
    And estou na página "publicações"
    And vejo um campo "Pesquisar por texto"
    And não existe uma "publicação" com o conteudo "lol é muito"
    And vejo a opção "Buscar"
When escrevo a frase "lol é muito" na "Pesquisar por texto"
    And seleciono a opção "Buscar"
Then eu vejo na tela uma mensagem informando "Nenhum Post encontrado" 

Scenario: Buscar posts por tag que não existe
Given estou logado com o usuário "juanzin"
    And estou na página "publicações"
    And vejo um campo "Tags"
    And vejo a opção "Buscar"
    And existe uma "publicação" com a tag "#Naojoguem"
When seleciono a opção "#Naojogue" no campo "Tags"
    And seleciono a opção "Buscar"
Then Eu estou na página "publicações"
    And vejo "publicações" com a tag "#Naojoguem" em seu conteudo logo abaixo

Scenario: Buscar posts por tag que não existe
Given estou logado com o usuário "juanzin"
    And estou na página "publicações"
    And vejo um campo "Tags"
    And vejo a opção "Buscar"
    And não existe uma "publicação" com a tag "#Naojoguem"
When seleciono a opção "#Naojogue" no campo "Tags"
    And seleciono a opção "Buscar"
Then eu vejo na tela uma mensagem informando "Nenhum Post encontrado"