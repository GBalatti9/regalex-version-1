import { useState, useEffect } from "react";

export const FirstForm = () => {

    const [ userInfo, setUserInfo ] = useState({
        email: '',
        date: ''
    });

    const handleInputChangeFirstForm = ({ target }) => {
        const { name, value } = target;
        console.log({ name, value });
        setUserInfo(prevUserInfo => ({
            ...prevUserInfo, 
            [name]: value,
        }));
    }

    useEffect(() => {
        console.log({ userInfo });
    }, [userInfo]);


    const handleSubmitFirstForm = (e) => {
        e.preventDefault();
        console.log({ userInfo });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="email">Mail</label>
                    <input type="email" name="data[email]" id="email" onChange={handleInputChange}/>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="date">Fecha de nacimiento</label>
                    <input type="date" name="data[date]" id="date" onChange={handleInputChange}/>
                </div>
                <button>Empezar</button>
            </form>
        </div>
    )
}
