
const Eroes = ()=> {
    const hash = "dc20a8051e539d159a7afe76ae949b42";
    const apikey = "e6179e20242d037a762e25fdcb64e828";

    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}`;
    return fetch(url).then((res)=>res.json());
}



export default Eroes;