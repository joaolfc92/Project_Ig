
        //aula 03

        //Numeros

        const idade = 31 // numeros inteiros
        const temperatura = 29.52; // float - numeros flutuantes
        const boleano = true; // possui dois estados, verdadeiro ou falso


        // array grupo de valores (multiplos tipos ou nao)

        const metas = [
        {
            franquia : 'copacabana',
            faturamento : 100000,
            matriculas : 60,
            socios: [
                {
                nome:'Silvia',
                CPF: '134.567.789-00',
                },

                {
                nome:'rafael',
                CPF: '134.567.789-01',
                }
        ]
        },

        {
            franquia: 'são gonçalo',
            faturamento : 100000,
            matriculas : 50,
        },

        {
            franquia: 'alcantara',
            faturamento : 100000,
            matriculas : 30,
        },
        
        
        ];

        
        // para acionar determinado item.
            console.log(metas[0].socios[0].nome)
        // concatenando
