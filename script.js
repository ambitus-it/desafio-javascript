function nomes(){
    var lista = [
        {
            nome: "Thiago",
            idade: 4567
        },
        {
            nome: "Caio",
            idade: 8
        },
        {
            nome: "Bruno",
            idade: 24
        }
    ]
    
    
    for(let pos = 0; pos< lista.length; pos++){
        
        var res =  document.getElementById('texto')
         res = document.write(lista[pos].nome)
    }
       
      
}

