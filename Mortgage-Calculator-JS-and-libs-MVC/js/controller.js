import * as Model from "./model.js"
import programs from './view/radioPrograms.js';

window.onload = function() {
    const getData = Model.getData;

    programs(getData);
    
    document.addEventListener('updateForm', (e) => {
        console.log('ZUUUUKA!!');
        console.log(e.detail);

        Model.setData(e.detail);
    })
}