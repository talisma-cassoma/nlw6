``` 
    $ yarn dev  
```
Dependencias:
```
    $ yarn add typescript ts-node-dev express @type/express 
    $ yarn add typeorm reflect-metadata sqlite3
```

- criamos o arquivo ormconfig.json

e definimos o tipo de base dados e o diretorio das migrations 
depois executamos  o comando 
``` 
    $ yarn typeorm migration:create -n NomedaMigration 
```

- para criar o BD .sqlite chamando a funcao ``createConnection()`` importada do modulo "typeorm"
- para criar a estrutura do BD definimos no ormconfig.json o caminho das "migrations" e excutando o comando ``yarn typeorm migration:run`` e para apagar ``yarn typeorm migration:revert``

- criar entidades com comando ``yarn typeorm entity:create -n nomeDaEntity`` nao esquecer de definir o directorio das entities no ormconfig.json

- descomentar na tsconfig :
    "experimentalDecorators": true,                 
    "emitDecoratorMetadata": true,  
    "strictPropertyInitialization": false, //para evitar erros 

-biblioteca uuid pra gerar primarykeys 
```
$ yarn add uuid 
$ yarn add type@/uuid
```
