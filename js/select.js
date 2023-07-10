const municipio = [
    "Angra dos Reis",
    "Aperibé",
    "Araruama",
    "Areal",
    "Armação dos Búzios",
    "Arraial do Cabo",
    "Barra do Piraí",
    "Barra Mansa",
    "Belford Roxo",
    "Bom Jardim",
    "Bom Jesus do Itabapoana",
    "Cabo Frio",
    "Cachoeiras de Macacu",
    "Cambuci",
    "Campos dos Goytacazes",
    "Cantagalo",
    "Carapebus",
    "Cardoso Moreira",
    "Carmo",
    "Casimiro de Abreu",
    "Comendador Levy Gasparian",
    "Conceição de Macabu",
    "Cordeiro",
    "Duas Barras",
    "Duque de Caxias",
    "Engenheiro Paulo de Frontin",
    "Guapimirim",
    "Iguaba Grande",
    "Itaboraí",
    "Itaguaí",
    "Italva",
    "Itaocara",
    "Itaperuna",
    "Itatiaia",
    "Japeri",
    "Laje do Muriaé",
    "Macaé",
    "Macuco",
    "Magé",
    "Mangaratiba",
    "Maricá",
    "Mendes",
    "Mesquita",
    "Miguel Pereira",
    "Miracema",
    "Natividade",
    "Nilópolis",
    "Niterói",
    "Nova Friburgo",
    "Nova Iguaçu",
    "Paracambi",
    "Paraíba do Sul",
    "Paraty",
    "Paty do Alferes",
    "Petrópolis",
    "Pinheiral",
    "Piraí",
    "Porciúncula",
    "Porto Real",
    "Quatis",
    "Queimados",
    "Quissamã",
    "Resende",
    "Rio Bonito",
    "Rio Claro",
    "Rio das Flores",
    "Rio das Ostras",
    "Rio de Janeiro",
    "Santa Maria Madalena",
    "Santo Antônio de Pádua",
    "São Fidélis",
    "São Francisco de Itabapoana",
    "São Gonçalo",
    "São João da Barra",
    "São João de Meriti",
    "São José de Ubá",
    "São José do Vale do Rio Preto",
    "São Pedro da Aldeia",
    "São Sebastião do Alto",
    "Sapucaia",
    "Saquarema",
    "Seropédica",
    "Silva Jardim",
    "Sumidouro",
    "Tanguá",
    "Teresópolis",
    "Trajano de Moraes",
    "Três Rios",
    "Valença",
    "Varre-Sai",
    "Vassouras",
    "Volta Redonda"
]

const ano = [
    "todos",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
]

const ano2 = [
    "todos",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
]

municipio.forEach((municipio) => {
    $("#municipio").append($('<option>', {
        value: municipio,
        text: municipio
    }))
})

ano.forEach(ano => {
    $("#ano").append($('<option>', {
        value: ano,
        text: ano
    }))
})

$("#municipio").on("change", () => {
    const munic = $("#municipio").val();
    if (munic != "todos") {
        $("#ano").empty();
        ano2.forEach(ano => {
            $("#ano").append($('<option>', {
                value: ano,
                text: ano
            }))
        });
    } else {
        $("#ano").empty();
        ano.forEach(ano => {
            $("#ano").append($('<option>', {
                value: ano,
                text: ano
            }))
        });
    }
});