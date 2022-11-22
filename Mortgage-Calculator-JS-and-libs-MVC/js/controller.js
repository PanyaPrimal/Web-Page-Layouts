import * as Model from "./model.js";
import updateResultsView from "./view/updateResultsView.js";
import programs from './view/radioPrograms.js';

import costInput from './view/costInput.js';
import costRange from './view/costRange.js';

window.onload = function() {
    const getData = Model.getData;

    //Init programs
    programs(getData);

    //init Cost input
    costInput(getData);
    costRange(getData);

    document.addEventListener('updateForm', (e) => {
        Model.setData(e.detail);

        const data = Model.getData();
        const results = Model.getResults();


        //Update results block
        updateResultsView(results);


    })
}