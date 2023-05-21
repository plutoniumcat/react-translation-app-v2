import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://translate.argosopentech.com', // This can be your own hosted LibreTranslate instance
    headers: {
        'Content-Type': 'application/json'
    }
});

export default {
    translateText(text, sourceLang, targetLang) {
        return apiClient.post('/translate', {
            q: text,
            source: sourceLang,
            target: targetLang
        });
    }
}
