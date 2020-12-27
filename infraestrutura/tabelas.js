class Tabelas {
    init(conexao){
        this.conexao = conexao;

        this.criarAtendimentos();
        console.log('Tabelas foram chamadas');

    }

    criarAtendimentos(){
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT,'+ 
            'Cliente varchar(50) NOT NULL, pet varchar(50), servico varchar(20) NOT NULL,'+
            ' data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL,'+
             'observacoes text, PRIMARY KEY(id))';

        this.conexao.query(sql, (erro) =>{
            if(erro){
                console.log('Erro: ' + erro);
            }
            else{
                console.log('Tabela Atendimentos criada com sucesso!');
            }
        });
    }
}

module.exports = new Tabelas;