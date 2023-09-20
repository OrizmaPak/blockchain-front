import { callModal } from "./toast";
import axios from 'axios'


export const validateInput =(ids:Array<string>)=>{
    if(!ids)return true
    let status = true
    let i = 0;
    do {
        const element = document.getElementById(`${ids[i]}`)as HTMLInputElement;
        if (element && !element.value) {
            status = false
            let ini = element.style.borderColor;
            element.style.borderColor = 'red'
            callModal(`${element.name} is invalid..`, 0)
            setTimeout(() => {
                element.style.borderColor = ini
            }, 5000);
        }
        i++
    } while (i < ids.length);
    return status
}
let stellarAuth = sessionStorage.getItem('stellarAuth');

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/v1/',
    timeout: 15000,
    headers: {'X-Custom-Header': 'foobar',
              'Authorization': 'Bearer '+sessionStorage.getItem('stellarAuth')
            }
  });

export const callController =async (id='', controller="auth/login", method="get", data={}, validator:any=[], funct:Function, success="successful", error="Something went wrong")=>{
    if(validator && !validateInput(validator)){
        callModal('Failed due to invalid input(s)', 0, id)
         return funct('')
    } 
    setTimeout(() => {
        console.log('data', data)
        callModal('Inputs validated. Form submiting...', 1, id, true)
        instance({
            method: method,
            url: instance.defaults.baseURL + controller,
            data: data
        })
        .then(function (response:any) {
            // Handle success
            callModal(success, 1, id);
            console.log('response', response);
            return funct(response.data)
        })
        .catch(function (err:any) {
            // Handle failure
            console.error(err);
            callModal(error, 0, id);
            return funct()
            });
    }, 1000); 
    
}