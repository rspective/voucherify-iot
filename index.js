'use strict'

const nfc = require('explorenfc')

function startListening () {
  nfc.init('/usr/bin/explorenfc-basic')
  nfc.read((nfcEvent) => {
    if (nfcEvent){
      console.log('id', nfcEvent.id)
      console.log('value', nfcEvent.value)
    } else {
      console.log('no NFC Event')
    }

    startListening()
  })
}

startListening()