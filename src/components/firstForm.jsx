import { useState, useEffect } from "react";

export const FirstForm = () => {

    const [ userInfo, setUserInfo ] = useState({
        email: '',
        date: ''
    });

    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        setUserInfo(prevUserInfo => ({
            ...prevUserInfo, 
            [name]: value,
        }));
    }

    useEffect(() => {
        console.log({ userInfo });
    }, [userInfo]);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ userInfo });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="email">Mail</label>
                    <input type="email" name="email" id="email" onChange={handleInputChange}/>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="date">Fecha de nacimiento</label>
                    <input type="date" name="date" id="date" onChange={handleInputChange}/>
                </div>
                <button>Empezar</button>
            </form>
        </div>
    )
}
