# Mapeamento de objeto-relacional || Object-relational mapping(ORM)

Em ciência da computação é uma técnica de programação para converter dados entre sistemas de tipos incompatíveis usando linguagens de programação orientadas a objetos. Isso cria, com efeito, um "banco de dados de objetos virtuais" que pode ser usado de dentro da linguagem de programação. 

Existem pacotes gratuitos e comerciais disponíveis que realizam o mapeamento objeto-relacional (como o sequelize que é o usado aqui), embora alguns programadores optem por construir suas próprias ferramentas ORM.

- A linguagem Relacional do Banco de dados não é compativel com a linguagem funcional do js, oque nos obriga a usar ORM para converção. exemplo:


### Tabela SQL

<table >
	<tr style = "border:5px solid black;">
		<td  style = "border:3px solid black;background-color:black;color:white;">id</td>
		<td  style = "border:3px solid black;background-color:black;color:white;">nome</td>
		<td  style = "border:3px solid black;background-color:black;color:white;">ra</td>
		<td  style = "border:3px solid black;background-color:black;color:white;">senha</td>
		<td  style = "border:3px solid black;background-color:black;color:white;">email</td>
	</tr>
<tr style = "border:5px solid black;">
		<td  style = "border:2px solid black;">1</td>
		<td  style = "border:2px solid black;">alguem</td>
		<td  style = "border:2px solid black;">232321</td>
		<td  style = "border:2px solid black;">123</td>
		<td  style = "border:2px solid black;">alguem@n.com</td>
	</tr>
</table>

### Modelo Relacional

Apenas retona os dados que pode ser usado em qualquer modelo.
```SQL
create table aluno(
    id int not null auto_increment primary key,
	nome varchar(100) not null,
	ra varchar(200) not null,
	senha varchar(100) not null,
	email varchar(200) not null
);

insert into aluno values(DEFAULT,'nome','ra','senha','email');

select * from aluno;
```

### Modelo full MVC

Vai retornar o html com os dados da tabela ja inseridos oque deixa o back-end muito amarrado com o font-end, pois so pode ser usado pela web.

```php

$sql = "insert into alunos values (DEFAULT, '".$nome."','".$ra."','".$senha."','".$email."')";

$sql = "select * from alunos";

$comando = mysqli_query($conex,$sql);

while ( $rs = mysqli_fetch_assoc($comando) ){
	echo "<h1>Nome: ".$rs['nome']."</h1>";
}
```

### Modelo Orientado a Objeto

vai retornar um json com os dados para serem inseridos no front-end, que pode ser web, moba, etc...

Fazendo com que o back-end seja desacoplado do font.
```javascript
class aluno(){
	private id: int;
	private nome: String;
	private ra: String;
	private senha: String;
	private email: String;
	
	function salvar(){
        //inserir aluno o banco
	}
	function mostrarAluno(id){
        //realizar o select do id indicado
	}
}

const aluno = new aluno();

aluno.salvar();

```