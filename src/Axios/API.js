import { CustomAxios } from './Axios';

//creating an API class just to call all the API's 
export default class API {
    static getLocation(place) {
        return CustomAxios.get(`locations?query=${place}`);
    }

    static getSearch(id,type,cuisine) {
        const url = encodeURI(`search?entity_id=${id}&entity_type=${type}&cuisines=${cuisine}`)
        console.log(url);
        return CustomAxios.get(url);
    }
}