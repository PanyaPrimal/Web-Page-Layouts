import * as Model from "./model.js";
import updateResultsView from './view/updateResultsView.js';
import programs from './view/radioPrograms.js'

import costInput from './view/costInput.js'
import costRange from './view/costRange.js'

window.onload = function () {
	const getData = Model.getData;

	// Init programs
	programs(getData);

	// Init Cost input
    const cleaveCost = costInput(getData);
    const sliderCost = costRange(getData);

	document.addEventListener('updateForm', (e) => {
		Model.setData(e.detail);

		const data = Model.getData();
		const results = Model.getResults();

		// Update all form view based on model
        updateFormAndSliders(data);

		// Update results block
		updateResultsView(results);
    });

    function updateFormAndSliders(data) {

        // costInput
        if (data.onUpdate !== 'inputCost') {
            console.log('UPDATE INPUT COST');
            cleaveCost.setRawValue(data.cost);
        }

        // costSlider
        if (data.onUpdate !== 'costSlider') {
            console.log('UPDATE COST SLIDER');
            sliderCost.noUiSlider.set(data.cost);
		}
    }
}