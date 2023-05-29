import { useEffect, useState } from 'react';
import './heroesListItem.scss'


function HeroesListItem({ nickname, realName, originDescr, superPowers, catchPhrases, imageFiles }) {
    const [decodedImage, setDecodedImage] = useState('');
    useEffect(() => {

    }, []);

    const decodeBase64Image = (base64Image) => {
        const byteString = atob(base64Image);
        const buffer = new ArrayBuffer(byteString.length);
        const arrayBufferView = new Uint8Array(buffer);

        for (let i = 0; i < byteString.length; i++) {
            arrayBufferView[i] = byteString.charCodeAt(i);
        }

        const blob = new Blob([arrayBufferView], { type: 'image/jpeg' });
        const imageUrl = URL.createObjectURL(blob);

        return imageUrl;
    };

    return (
        <div className='heroesListItem'>
            <p>{nickname}</p>
            <img src={imageFiles[0]}></img>
        </div>
    );
}

export default HeroesListItem;
