import {articles} from "../../../data"

export default function handler({query: {id}},res) {
    //req.query.id
    const filteredArticles = articles.filter(article => article.id === id)

    if(filteredArticles.length > 0){
        res.status(200).json(filteredArticles[0])
    }else{
        res.status(404)
            .json({message : `article with id ${id} not found`})
    }
}