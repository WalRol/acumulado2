import axios from 'axios';


export default async function getArticles(){
    try {
        const response = await axios({
            url: 'https://jrt2bb3b2nlkw5ozvfcld62wbe0pnifh.lambda-url.us-east-1.on.aws/',
            method: 'get',
        }); 
        const data = response.data.articles;
        return data;
    } catch (e) {
        throw e
    }
}
