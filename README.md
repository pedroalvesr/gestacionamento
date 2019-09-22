# Gestacionamento
Sistema para a gestão de estacionamentos, controle de entradas, saídas e valores a serem pagos pelo tempo de permanência.

![image](https://user-images.githubusercontent.com/22817118/65385935-409e3680-dd0b-11e9-9da6-a5566d516b0b.png)

### Configuração da Aplicação

### front-end

```
     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 8.1.3
Node: 10.15.3
OS: darwin x64
Angular: 8.1.3
... animations, cli, common, compiler, compiler-cli, core, forms
... language-service, platform-browser, platform-browser-dynamic
... router

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.801.3
@angular-devkit/build-angular     0.801.3
@angular-devkit/build-optimizer   0.801.3
@angular-devkit/build-webpack     0.801.3
@angular-devkit/core              8.1.3
@angular-devkit/schematics        8.1.3
@ngtools/webpack                  8.1.3
@schematics/angular               8.1.3
@schematics/update                0.801.3
rxjs                              6.4.0
typescript                        3.4.5
webpack                           4.35.2
```
### back-end

A PoC de um sistema para gerenciar estacionamentos foi desenvolvida na **IDE Eclipse** e utilizando o **maven** para a configuração das dependências, abaixo o arquivo **pom.xml** que deve conter as dependências 

- `spring-boot-starter-data-rest` que é a biblioteca para a criação do servidor REST com o Spring Boot;

- `spring-boot-starter-data-jpa `que é a dependência do Spring Data;

-  `postgresql` que é o Driver para a conexão com o banco de dados;

- `springfox-swagger2`, `springfox-swagger-ui` que é uma biblioteca que visa solucionar esse problema de documentação e outros .

```
      <dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

		<dependency>
			<groupId>org.postgresql</groupId>
			<artifactId>postgresql</artifactId>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>

		<dependency>
			<groupId>io.springfox</groupId>
			<artifactId>springfox-swagger2</artifactId>
			<version>2.9.2</version>
		</dependency>
		<dependency>
			<groupId>io.springfox</groupId>
			<artifactId>springfox-swagger-ui</artifactId>
			<version>2.9.2</version>
		`</dependency>`
	</dependencies>
```

### Como baixar

crie um fork ou baixe manualmente o projeto clicando [aqui](https://github.com/pedroalvesr/gestacionamento.git).

### Execultando o projeto

### front-end

Usando sua IDE de preferência abra a pasta `gestacionamento` que está dentro de `/frontend/gestacionamento`.

1. `Execute npm install` (esse comando baixará todas as dependências necessárias para que o projeto possa funcionar corretamente);
2. `Execute ng serve `(irá disponibilizar que o projeto possa ser acesso pelo navegador de preferência, geralmente o servidor é criado escutando na porta 4200);

se tudo der certo, deve aparecer algo parecido com isso:

![image](https://user-images.githubusercontent.com/22817118/65385957-a1c60a00-dd0b-11e9-95f0-d42f173c1d2e.png)


### back-end

 Eclipse Java EE IDE for Web Developers.

-  Version: Photon Release (4.8.0)

PgAdmin 4

- Version: 4.2

Usando sua IDE de preferência abra a pasta `gestacionamento`.

1. converta o projeto para Maven-Project;
2. crie um banco de dados com o nome `gestacionamento`, **_(postgres 9.6 ou superior)_**;
3. configure o `aplication.properties`, conforme abaixo:

```
spring.datasource.url=jdbc:postgresql://localhost/gestacionamento
spring.datasource.username=postgres
spring.datasource.password=postgres
spring.jpa.hibernate.ddl-auto=update
spring.jpa.generate-ddl=true
```
Em `src/main/java ` abra o pacote `gestacionamento` e execute conforme imagem abaixo:
 
![gestacionamento](https://user-images.githubusercontent.com/22817118/65386017-a212d500-dd0c-11e9-989d-2fae43b7b206.png)

### Como usar

Para o primeiro acesso, preencha os campos com email e senha, volte a tela de login e coloque usuario e senha recém cadastrados.

![image](https://user-images.githubusercontent.com/22817118/65386168-56612b00-dd0e-11e9-9be1-bb084911e9aa.png)

Painel onde é possível ver todas as vagas livres e ocupadas

![image](https://user-images.githubusercontent.com/22817118/65385935-409e3680-dd0b-11e9-9da6-a5566d516b0b.png)

O primeiro passo é cadastrar o pátio, todos os campos devem ser preenchidos:

![image](https://user-images.githubusercontent.com/22817118/65386187-7ee92500-dd0e-11e9-81a6-cfff033a0b9f.png)

Após o cadastro do pátio, você pode castrar um veículo, um cliente e vincula-lo ao um pátio, isso tudo na mesma tela.

![image](https://user-images.githubusercontent.com/22817118/65386188-8d374100-dd0e-11e9-9aa9-54c8f394207a.png)

No menu carros estacionados, serão listados todos os carros cadastrados que estão ou já ocuparam uma vaga. Para encerrar o tempo do veiculo no estacionamento, basta clicar no botão **Gerar custo do tempo estacionado** **($)**, assim será gerado os minutos estacionados e o custo que o cliente deve pagar.

![image](https://user-images.githubusercontent.com/22817118/65386268-dcca3c80-dd0f-11e9-978a-e40730d93732.png)





