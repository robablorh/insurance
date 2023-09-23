export const chassisNumberGenerator = () => {
//   const currentDate = new Date();

//   const year = currentDate.getFullYear().toString();
//   const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
//   const day = currentDate.getDate().toString().padStart(2, "0");
//   const hours = currentDate.getHours().toString().padStart(2, "0");
//   const minutes = currentDate.getMinutes().toString().padStart(2, "0");
//   const seconds = currentDate.getSeconds().toString().padStart(2, "0");

  const randomLetters = () => {
    const allAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "" 
    for(let i = 0; i < 4; i++){
        const randonLetter = Math.floor(Math.random() * allAlphabet.length)
         result += allAlphabet[randonLetter]
      }
      return result
    }
  
  
  const randomDigits = Math.floor(Math.random() * 10000).toString().padStart(12, "0");

  return `${randomLetters()}${randomDigits}`;
};

export const stickerNumber = () => {
    const stickerNumbers = Math.floor(Math.random() * 10000).toString().padStart(6, "0");
    return `WRT ${stickerNumbers}`;
}
