import React, {useState, useEffect} from 'react';
import Tombol from '../components/Tombol';

const Learning = () => {

    const [title, setTitle] = useState('React');

    const handleChangeTitle = (newTitle) => {
        setTitle(newTitle);
    }
    useEffect(() => {
        console.log(`Title Berubah menjadi : ${title}`);
    }, [title]);

    return(
        <div>
            <h1 style={{ margin: '0' }}>Belajar {title}</h1>
            <div style={{ textAlign: 'center' }}>
                <Tombol onChangeTitle={handleChangeTitle}>React</Tombol>
                <Tombol onChangeTitle={handleChangeTitle}>JavaScript</Tombol>
            </div>
        </div>
    )
};

export default Learning;