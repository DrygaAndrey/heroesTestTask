export const handleFormHide = () => {
    setShowAddHeroForm(false);
};
export const handleNicknameChange = (event) => {
    setNickname(event.target.value);
};
export const handleRealNameChange = (event) => {
    setRealName(event.target.value);
};
export const handleOriginDescr = (event) => {
    setOriginDescr(event.target.value);
};
export const handleCatchPhrases = (event) => {
    setCatchPhrases(event.target.value);
};
export const handleSuperPowers = (event) => {
    setSuperPowers(event.target.value);
};
export const handleImageInputChange = (event) => {
    const files = event.target.files;
    const imageArray = Array.from(files);
    setImages(imageArray);
};
export const handleSubmit = (event) => {
    event.preventDefault();
};