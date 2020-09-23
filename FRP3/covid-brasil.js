fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/go')
  .then( res => res.json() )
  .then( data => console.log(data) )
  .catch(error => console.log('Conexão Falhou'))