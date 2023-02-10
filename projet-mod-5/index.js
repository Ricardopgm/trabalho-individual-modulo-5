const readline = require ('readline');
const rl= readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function askforcssProperties(){
    rl.question('insira uma lista de propriedades CSS separadas por vírgulas ou escreva "sair" para encerrar.',
    (answer)=>{
        if (answer === 'sair'){
            console.log('encerrando programa.');
            rl.close();

        }else{

            let cssproperties = answer.split(',');
            console.log('Propriedades CSS inseridas:');
            console.log(cssproperties);
            
        }
    });
}
askforcssProperties();