import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
import { ScriptElementKindModifier } from 'typescript';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function handleString(post: string): string {
    var postInArray: string[] = post.split(' ');
    postInArray.splice(-4, 4);
    postInArray.shift();
    post = postInArray.join(' ');

    return post;
}
defineSupportCode(function ({ Given, When, Then }) {

    Given(/^eu estou logado com o usuário "([^\"]*)"$/, async (username) => {
        await browser.get("http://localhost:4200/my_posts");
        var user: string = await element(by.id('username')).getText();
        expect(user).to.equal(username);
    })

    Given(/^eu estou na página "([^\"]*)"$/, async (name) => {

        await expect(browser.getTitle()).to.eventually.equal(name);
    })

    Given(/^eu vejo uma lista de posts/, async () => {

        await expect((await element.all(by.className('post-list'))).length).to.be.above(0);
    })
    When(/^eu seleciono a opção "([^\"]*)"$/, async (name) => {
        await element(by.buttonText(<string>name)).click();
    })

    When(/^escrevo a frase "([^\"]*)" na caixa de texto/, async (post) => {
        await element(by.id('caixa-de-texto-post')).clear();
        await element(by.id('caixa-de-texto-post')).sendKeys(<string>post);

    })

    When(/^eu seleciono a opção "([^\"]*)"$ /, async (name) => {

        await element(by.buttonText(<string>name)).click();


    })

    When(/^eu seleciono, no post mais recente, a opção "([^\"]*)"$/, async (name) => {
        await element.all(by.buttonText(<string>name)).first().click();
    })

    When(/^eu substituo a frase do post por "([^\"]*)"$/, async (postEdited) => {

        await element(by.id('caixa-de-texto-post')).clear();


        await element(by.id('caixa-de-texto-post')).sendKeys(<string>postEdited);

    })


    Then(/^eu vejo na tela uma mensagem de sucesso/, async () => {
        await expect(element(by.className('msg-sucess')).isPresent()).to.eventually.equal(true);
    })

    Then(/^eu ainda estou na página "([^\"]*)"$/, async (pageName) => {
        sleep(10000).then(() => {
            expect(browser.getTitle()).to.eventually.equal(pageName);

        })

    })
    Then(/^eu vejo a frase "([^\"]*)" no topo da minha lista de posts/, async (post: string) => {
        var mostRecentPost: string = await element.all(by.className('post-list')).first().getText();
        mostRecentPost = handleString(mostRecentPost);
        expect(mostRecentPost).to.equal(post);
    })
    Then(/^eu vejo na tela uma mensagem de erro/, async () => {
        sleep(10000).then(() => {
            expect(element(by.className('msg-error')).isPresent()).to.eventually.equal(true);
        })
    })
    Then(/^eu nao vejo a frase "([^\"]*)" na minha lista de posts/, async (post: string) => {
        await browser.get("http://localhost:4200/my_posts");
        var mostRecentPost: string = await element.all(by.className('post-list')).first().getText();

        mostRecentPost = handleString(mostRecentPost);
        expect(mostRecentPost).to.not.equal(post);
    })

    
});