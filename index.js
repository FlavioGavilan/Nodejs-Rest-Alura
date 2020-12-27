const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect(erro => {
    if(erro){
        console.log('Erro: ' + erro);
    }
    else {
        console.log('Connectado com sucesso!');
        Tabelas.init(conexao);
        const app = customExpress();

        app.listen(3000, () => console.log('servidor rodando na porta 3000'));
    }
})


