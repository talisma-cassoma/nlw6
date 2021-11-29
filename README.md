``` 
    $ yarn dev  
```
Dependencias:
```bash
    $ yarn add typescript ts-node-dev express @type/express typeorm reflect-metadata sqlite3
```

- criamos o arquivo ormconfig.json

e definimos o tipo de base dados e o diretorio das migrations 
depois executamos  o comando 
``` 
    $ yarn typeorm migration:create -n Nomedamigration 
```

- para criar o BD .sqlite chamando a funcao ``createConnection()`` importada do modulo "typeorm"