const { Browser } = require('selenium-wrapper-ed')

const automate = async () => {
await Browser.openPage('https://edtesting.pi.service.pl-labs.com/')
await Browser.setValue('userName', 'user')
await Browser.setValue('passwordField', 'passcode')
await Browser.click('submit')
}

automate() 
