const Data = require('./dist/cjs').default

console.log(Data)

console.log(JSON.stringify(Data.getToken('xegld'), null, 2))