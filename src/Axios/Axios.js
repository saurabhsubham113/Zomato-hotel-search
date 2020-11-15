import _axios from 'axios';

//creating a custom axios class so that it does not have dependency in every file
export class CustomAxios {

    //creating an instance of the axios and setting the baseurl and headers
    static axios = _axios.create({
        baseURL: 'https://developers.zomato.com/api/v2.1/',
        headers: {
            'user-key': process.env.REACT_APP_ZOMATO_API_KEY
        }
    });
    
    //creating the GET methods of axios same way we can create other methods
    static async get(url) {
        try {
            //calling the get function of the axios
            const response = await CustomAxios.axios.get(url);
            if (response) {
                return response.data;
            }
        } catch (error) {
            this.handleErrors(error);
            return Promise.reject(error);
        }
    }

    //Handling errors of the axios
    static handleErrors(error) {
        if (error.response) {
            const message = error.response.data.message;
            const errorMessage = message ? message : 'something went wrong.'
            console.log(errorMessage);
        } else {
            console.log('something went wrong');
        }
    }
}