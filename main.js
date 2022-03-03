const app = require('../automacao-preenchimento-planilha/app')
const arrayJson = require('../automacao-preenchimento-planilha/casosTeste.json')

async function processo(req, res) {
    try {
 

        let listaStatus = []
        for (const key in arrayJson) {

            const lista = await app.postCases(key).then((value) => {
                console.log("Teste na main")
                listaStatus.push(value)
            })
        }

        const test = await app.testarRequisicao()

        console.log(test)
        



        console.log("listaStatus")

        console.log(listaStatus)

        // 
    } catch (err) {

    }

}
module.exports = {
    processo
}



