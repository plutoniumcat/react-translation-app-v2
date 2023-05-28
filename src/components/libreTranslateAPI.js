import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://translate.argosopentech.com', // This can be your own hosted LibreTranslate instance
    headers: {
        'Content-Type': 'application/json'
    }
});

export default {
    translateText(text, sourceLang, targetLang) { 
        return apiClient.post('/translate', { // Sends POST request to /translate endpoint for translation.
            q: text,
            source: sourceLang,
            target: targetLang
        });
    },
    detectLanguage(text) {
        return apiClient.post('/detect', { // Sends POST request to /detect endpoint for language detection. If error, axios will reject the promise
            q: text,
        });
    }
}
