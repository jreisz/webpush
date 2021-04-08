
var push = require('web-push')
//let validAPIKeys = push.generateVAPIDKeys();
let validKeys={
    publicKey: 'BD4zY0ORYvY4GGX8TuR5b2NLLLI8i9jzbvVq6EOkZmNzfd2WMcBAezKE2jj51qsTNaOWqn50cpxx3NlkIlr88Qw',
    privateKey: 'R-BuLDqQUzkQY3yyLIJxEhh9gN5kEvhu30nZYU44cWg'
  }
push.setVapidDetails('mailto:test@code.co.uk',validKeys.publicKey,validKeys.privateKey)
let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/cTiX8wwKRF8:APA91bFqG6qL84WvPRQl710cAyuHPLRTu_TWg-7-MP8GovdoyMgA9iay5cgfE3T5P9qfEkRjdNdnAWBVeXaamnxjvJPfsk85NshQwWUelzHFEF3esnRF-mCeCxiWJrp6E7II3X8oe19W","expirationTime":null,"keys":{"p256dh":"BKMBX3m9ENJHp-Vy-THsdbCk7OiKOwBUqDbqgyaC47ncniWQiE9uysuv2K30hRgGS1A9dNv9giQqQrx-rDcjF9k","auth":"z2jf4sNSpWV_oe8MmGiUPQ"}}
push.sendNotification(sub,'test message')