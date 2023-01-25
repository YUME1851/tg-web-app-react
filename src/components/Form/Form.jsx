import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <div className={'form'}>
            <h3>Поделись-ка со мной!</h3>
            <input className={'input'} type="text" placeholder={'Любимое аниме'}/>
            <input className={'input'} type="text" placeholder={'Любимый персонаж'}/>
            <select className={'select'}>
                <option value={'physical'}>Раз</option>
                <option value={'legal'}>Два</option>
            </select>
        </div>
    );
};

export default Form;