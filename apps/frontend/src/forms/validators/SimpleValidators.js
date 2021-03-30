export const isRequired = ({ field }) => {
    const isValid = (field.value) ? true : false;
    return [isValid, `Поле ${field.label} должно быть не пустое`];
}

const someAsyncCheck = (val) => {
    return new Promise((rs,rj)=>{
        console.log('Start search for ',val,'...');
        setTimeout(()=>{
            console.log('End');
            const result = (val.length % 2 === 0) ? true : false;
            return rs(result);
        },2000)
    })
}

export const isEvenNumberLength = ({ field }) => {
    return someAsyncCheck(field.value).then( r => [r, 'Не четное число символов'] );
}