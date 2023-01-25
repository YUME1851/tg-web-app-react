import React from 'react';
import './Form.css';

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setCountry(e.target.value)
    }

    const onChangeSubject = (e) => {
        setCountry(e.target.value)
    }

    return (
        <div className={'form'}>
            <h3>Поделись-ка со мной!</h3>
            <input className={'input'}
                   type="text"
                   placeholder={'Страна'}
                   value={country}
                   onChange={onChangeCountry}
            />
            <input className={'input'}
                   type="text"
                   placeholder={'Улица'}
                   value={street}
                   onChange={onChangeStreet}
            />
            <select  value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </div>
    );
};

export default Form;