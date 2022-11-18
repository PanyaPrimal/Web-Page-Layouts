let data = {
    selectedProgram: 0.1,
    programs: {
        base: 0.1,
        it: 0.047,
        gov: 0.067,
        zero: 0.12,
    },
};

function getData() {
    return {...data}
}

function setData(newData) {
    console.log('new data', newData);

    
    data = {
        ...data, 
        ...newData
    }

    console.log('updated data', data);
}

export {getData, setData}