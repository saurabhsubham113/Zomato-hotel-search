import { CustomAxios } from './Axios';

//creating an API class just to call all the API's 
export default class API {
    static getLocation(place) {
        return CustomAxios.get(`locations?query=${place}`);
    }

    static getRestrauntList(id,type) {
        return CustomAxios.get(`location_details?entity_id=${id}&entity_type=${type}`);
    }
}