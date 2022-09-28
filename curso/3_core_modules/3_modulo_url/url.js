const url = require("url");
const address= "htps://www.meusite.com.br/catalog?products=cadeira"
const parseurl  =  new url.URL(address);

console.log(parseurl.host);
console.log(parseurl.pathname);
console.log(parseurl.search);
console.log(parseurl.searchParams);
console.log(parseurl.searchParams.get("products"));
