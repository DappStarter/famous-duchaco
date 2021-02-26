require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena forward turtle crazy rate stereo home gesture bread slot gate'; 
let testAccounts = [
"0x873b54cf822bf5be5f7c99bd6172c49ee11c4abc9a25269e20a66c81d85d535b",
"0xfcc8126d7ece3103ba41d8b864de9b5a7c47f04eed8c4632d8f37913ddaafdcd",
"0x2a72fa4ae409bedafccabc9c05761216fdbe2609ae7e43c9fed98a0c45134628",
"0xda66b0518af7a7e641071d2f6a3c4049ca952a0401f695a51ca8a24094731f43",
"0x7b3f3d6328cfa1259a7f77c9aed8946be8a9e304d939e667314cf029a7b62423",
"0x3a390de112e51917e2fae730dec443c905f2a14a2fb72c02abc93800818e7248",
"0xca58432ebc60aba402d72b10763e10e1b036d91cf221ffdf76a9cfeab38cdea7",
"0x25b4219861f7c0907799c9b424d2b594ca7cc8820de6b1f724ed28405504fdae",
"0x3fc85c0c354d66001396921a482c7113986188324ef56b94976ee4da3a61b3ee",
"0xdcd9ed9a8ece67d03272cf2ca5c6e4d8860cd61456b47c38e2292e8b13f49e03"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
