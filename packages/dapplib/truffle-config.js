require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'install infant fox turn fan repeat rural soft grace clock forward gentle'; 
let testAccounts = [
"0x0230f8942a3dbca49cdab941afea5114c2b5dfe7b87646306f763488f488c080",
"0x21ccefada610448d4c38d02a281346e6b9fb825a70e33ca28b5bcce166059766",
"0x51f9b106fc8c2e9ae2a97bf182c1fdbc6e3f1c68fec4033abd4815be3ac893f1",
"0x85b73f8472abf91508a37f2a5785663d783d24c5dda46c13ce560eea865c161d",
"0xa7ec00ecb6386e4525217e350a12c1eb8cf91b3a786f3e7edf637d1362ff71d6",
"0x46c3890807b0609f23be04d88ee05f179478848f34843cee022323fff12dca4f",
"0x73baa2a27e8102d7bbdcb277e42dd1d619ffd55df6d69077f71407449b47608a",
"0x277fe919336cf519d85a3b916996c21232a6a4a55b277449c9c4174efa00fcf3",
"0x31bbb93333e317567f7bc3ee2ca61657bcf9f2c213838c35e7a6347d5d540658",
"0xe5dfb92f30da0a1da6b9e92e3310e250619c801ff88cbaa73cfd5c633f094d1e"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


