const apiConfig = {
  baseUrl: process.env.REACT_APP_API_URL,
  apiKey: process.env.REACT_APP_API_KEY,
  originalImage: (imgPath) =>
    `${process.env.REACT_APP_ORIGINAL_IMG_URL}${imgPath}`,
  w500Image: (imgPath) => `${process.env.REACT_APP_W500_IMG_URL}${imgPath}`,
};

export default apiConfig;
