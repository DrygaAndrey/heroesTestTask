import { useState, useRef } from 'react';
import './addHeroForm.scss'
import axios from 'axios';

function AddHeroForm({ setShowAddHeroForm, setMessage, getHeroes }) {
    const [nickname, setNickname] = useState('');
    const [realName, setRealName] = useState('');
    const [originDescr, setOriginDescr] = useState('');
    const [superPowers, setSuperPowers] = useState('');
    const [catchPhrases, setCatchPhrases] = useState('');
    const [images, setImages] = useState([]);
    const fileInputRef = useRef(null);

    const handleImagesSelect = (event) => {
        const selectedImages = Array.from(event.target.files);
        setImages(selectedImages);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFiles = Array.from(event.dataTransfer.files);
        setImages(droppedFiles);
    };
    const handleContainerClick = () => {
        fileInputRef.current.click();
    };


    const handleFormHide = () => {
        setShowAddHeroForm(false);
    };
    const handleNameChange = (event) => {
        setNickname(event.target.value);
    };
    const handleRealNameChange = (event) => {
        setRealName(event.target.value);
    };
    const handleOriginDescr = (event) => {
        setOriginDescr(event.target.value);
    };
    const handleCatchPhrases = (event) => {
        setCatchPhrases(event.target.value);
    };
    const handleSuperPowers = (event) => {
        setSuperPowers(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Предотвращаем перезагрузку страницы после отправки формы


        // Проверка типа файла
        const checkFileType = file => {
            const validImageTypes = ['image/jpeg', 'image/png'];
            return validImageTypes.includes(file.type);
        };

        // Проверка типа и размера для каждого файла
        const processImageFiles = async images => {
            const imageFiles = [];
            let count = 0;

            for (const file of images) {
                if (images.length > 5) {
                    console.log('Файлов больше чем 5')
                    break; // Если количество файлов достигло 5, прерываем цикл
                } else {
                    if (checkFileType(file) && file.size <= 3 * 1024 * 1024) {
                        const base64 = await convertToBase64(file);
                        imageFiles.push(base64);
                        count++;
                    } else {
                        console.log('Файл больше 3 мб или не картинка')
                        break;
                    }
                }
            }

            return imageFiles;
        };

        // Функция для перекодировки файла в base64
        const convertToBase64 = file => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();

                reader.onloadend = () => {
                    resolve(reader.result);
                };

                reader.onerror = reject;

                reader.readAsDataURL(file);
            });
        };

        // Использование функции для обработки изображений
        const imageFiles = await processImageFiles(images);

        if (imageFiles.length === 0) {
            setMessage('Maximum 5 images, maximum 3 MB in PNG or JPG format');
        } else {
            if (nickname.trim() === '' || nickname.length > 50 ||
                realName.trim() === '' || realName.length > 50 ||
                originDescr.trim() === '' || originDescr.length > 120 ||
                superPowers.trim() === '' || superPowers.length > 50 ||
                catchPhrases.trim() === '' || catchPhrases.length > 50) {
                return false;
            } else {
                const dataToSend = {
                    nickname,
                    realName,
                    originDescr,
                    superPowers,
                    catchPhrases,
                    imageFiles
                }
                try {
                    console.log(dataToSend);
                    const response = await axios.post('http://localhost:3333/heroes/heroAdd', dataToSend);
                    console.log(response.data); // Полученные данные от сервера
                    setMessage('Hero saved, wait a few seconds while it is loading');
                    getHeroes();
                } catch (error) {
                    console.error('Ошибка при отправке запроса:', error);
                }
            }
        }





    };

    return (
        <form onSubmit={handleSubmit} className='addHeroForm'>
            <input type="text" value={nickname} onChange={handleNameChange} placeholder='Nickname' />
            <input type="text" value={realName} onChange={handleRealNameChange} placeholder='Real name' />
            <textarea rows="2" value={originDescr} onChange={handleOriginDescr} placeholder='Origin description'></textarea>
            <input type="text" value={superPowers} onChange={handleSuperPowers} placeholder='Super powers' />
            <input type="text" value={catchPhrases} onChange={handleCatchPhrases} placeholder='Catch phrases' />
            <div
                className="file-input-container" // Добавляем класс контейнера
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={handleContainerClick} // Добавляем обработчик клика на контейнер
            >
                <input
                    type="file"
                    multiple
                    onChange={handleImagesSelect}
                    className="hidden-file-input" // Добавляем класс скрытого инпута
                    ref={fileInputRef} // Привязываем скрытый инпут к useRef
                />
                <p>Drop no more than 5 images here, maximum 3 mb each in PNG or JPG format</p>
                <p>{images.length} images selected</p>
                <div className="file-list"> {/* Добавляем класс списка файлов */}
                    {images.map((image) => (
                        <p key={image.name}>{image.name}</p>
                    ))}
                </div>
            </div>

            <button type="submit">Create hero</button>

            <button className='cancel' onClick={handleFormHide}>✖</button>

        </form>
    );
}

export default AddHeroForm;
