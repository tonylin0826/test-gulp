var Mnemonic = require('bitcore-mnemonic');
var bip39 = require('bip39')
var code = new Mnemonic(Mnemonic.Words.ENGLISH);


function genMnemonic () {
	return code.toString();
}

function genMnemonicbip39 () {
	return bip39.entropyToMnemonic('00000000000000000000000000000000')
}

module.exports = {
    genMnemonic,
    genMnemonicbip39
}

window.genMnemonic = genMnemonic;
window.genMnemonicbip39 = genMnemonicbip39;