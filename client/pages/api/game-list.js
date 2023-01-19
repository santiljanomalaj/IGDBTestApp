import axios from 'axios';

export default async function handler(req, res) {
    const response = await axios({
        baseURL: 'https://api.igdb.com/v4/',
        method: 'GET',
        url: '/games',
        headers: {
            'content-type': 'application/json',
            'Client-ID': 'kqk503eve71nlfvkt8hb3zt3d5xfj6',
            'Authorization': 'Bearer b7t4ndjbqshad2wy1215kld9j9s71m'
        },
        params: {
            fields: '*,screenshots.*',
            limit: 20,
            offset: 16
        }
    });
    console.log("game-list", response.data);
    res.status(200).json(response.data);
}
