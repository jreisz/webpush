
var push = require('web-push')
//let validAPIKeys = push.generateVAPIDKeys();
let validKeys={
    publicKey: 'BD4zY0ORYvY4GGX8TuR5b2NLLLI8i9jzbvVq6EOkZmNzfd2WMcBAezKE2jj51qsTNaOWqn50cpxx3NlkIlr88Qw',
    privateKey: 'R-BuLDqQUzkQY3yyLIJxEhh9gN5kEvhu30nZYU44cWg'
  }
push.setVapidDetails('mailto:test@code.co.uk',validKeys.publicKey,validKeys.privateKey)
let sub = {}
push.sendNotification(sub,'test message')