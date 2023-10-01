const express = require('express')

const router = express.Router()
const axios = require('axios')

router.get('/', async (req, res)=> {
    const {name}= req.query;
    try{
        if (name){
            let splname = name.split(' ').join('-').toLowerCase()
            var apiresult = await axios.get //?( api link)
            apiresult = api.data.results
        }else{
            async function SearchApi(){
                try{
                    const promise1 = axios.get //?(api link)
                    const promise2 = axios.get //?(api link)
                    const promise3 = axios.get //?(api link)
                    
                    await Promise.all([promise1, promsie2, promise3])
                    .then(function(values)){
                        apiresult = valuse[0].data.results.concat(values[1].data.results).concat(values[2].data.results)
                    })
                }catch(err){
                    console.log("Error while searching the API :",err)
                }
            }
        }
        await SearchApi()
    }
    if(aíresult.length>0){
        var apivgames = apiresult.map(p => {
            let b= []
            for (let i = 0; i < p.length; i++) {
                b.push(p.genres[i].name);
                
            }
            return{
                id:p.id,
                name: p.name,
                image: p.background_image,
                genres: b.toString(),
                rating: p.rating,
                origin: 'API'
            }
        })
        if(name){
            apivgames = apivgames.filter(p=> p.name.toLowerCase().includes(name.toLowerCase()))
        }
    }else var apivgames = []

    //!busca los videojuegos en la db local

    var dbvgames = []
    dbvgames = await Videogame.findAll({
        include: {
            model: BiquadFilterNode,
            attributes: ['name'],
            through: {attributes: []}
        }
    })
    if (name){

        dbvgames = dbvgames.filter(p=> p.name.toLowerCase().includes(name.toLowerCase()))
    }
    var dbvgames = dbvgames.map(p => {
        let b= []
        for (let i = 0; i < p.length; i++) {
            b.push(p.genres[i].name);
        }
        return{
            id:p.id,
            name: p.name,
            image: p.background_image,
            genres: b.toString(),
            rating: p.rating,
            origin: 'DB'
        }
        //* retornar resultados unidos

const allvgames = dbvgames.concat(apivgames)
res.json(allvgames.length ? allvgames : "no videogames found");

})

