import aries from './../assets/aries.png'
import gemeos from './../assets/gemeos.png'
import touro from './../assets/touro.png'
import cancer from './../assets/cancer.png'
import leao from './../assets/leao.png'
import virgem from './../assets/virgem.png'
import libra from './../assets/libra.png'
import escorpiao from './../assets/escorpiao.png'
import sagitario from './../assets/sagitario.png'
import aquario from './../assets/aquario.png'
import capricornio from './../assets/capricornio.png'
import peixes from './../assets/peixes.png'

const defaultProducts = [
    {   
        id: 1,
        name: 'Armadura de Áries', 
        img: aries,
        price: 1500,
        description: 'A Armadura de Áries guarda a Primeira das Doze Casas do Zodíaco de Ouro'
    },

    {
        id: 2,
        name: 'Armadura de Touro',
        img: touro,
        price: 900,
        description: 'A Armadura de Touro guarda a Segunda das Doze Casas do Zodíaco de Ouro'
    },
    {
        id:3,
        name: 'Armadura de Gêmeos',
        img: gemeos,
        price: 2000,
        description: 'A Armadura de Gêmeos guarda a Terceira das Doze Casas do Zodíaco de Ouro'
    },
    {
        id:4,
        name: 'Armadura de Câncer',
        img: cancer,
        price: 800,
        description: 'A Armadura de Câncer guarda a Quarta das Doze Casas do Zodíaco de Ouro'
    },
    {
        id:5,
        name: 'Armadura de Leão',
        img: leao,
        price: 1800,
        description: 'A Armadura de Leão guarda a Quinta das Doze Casas do Zodíaco de Ouro'
    },
    {
        id:6,
        name: 'Armadura de Virgem',
        img: virgem,
        price: 3000,
        description: 'A Armadura de Virgem guarda a Sexta das Doze Casas do Zodíaco de Ouro'

    },
    {
        id:7,
        name: 'Armadura de Libra',
        img: libra,
        price: 2500,
        description: 'A Armadura de Libra guarda a Sétima das Doze Casas do Zodíaco de Ouro'

    },
    {
        id:8,
        name: 'Armadura de Escopião',
        img: escorpiao,
        price: 1700,
        description: 'A Armadura de Escorpião guarda a Oitava das Doze Casas do Zodíaco de Ouro'

    },
    {
        id:9,
        name: 'Armadura de Sagitário',
        img: sagitario,
        price: 2700,
        description: 'A Armadura de Sagitário guarda a Nona das Doze Casas do Zodíaco de Ouro'

    },

    {
        id:10,
        name: 'Armadura de Capricórnio',
        img: capricornio,
        price: 1200,
        description: 'A Armadura de Capricórnio guarda a Décima das Doze Casas do Zodíaco de Ouro'

    },

    {
        id:11,
        name: 'Armadura de Aquário',
        img: aquario,
        price: 1700,
        description: 'A Armadura de Aquário guarda a Décima Primeira das Doze Casas do Zodíaco de Ouro'

    },
    {
        id:12,
        name: 'Armadura de Peixes',
        img: peixes,
        price: 800,
        description: 'A Armadura de Peixes guarda a Décima Segunda das Doze Casas do Zodíaco de Ouro'

    },

]

export default defaultProducts
