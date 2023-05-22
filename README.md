# What is Translator PU?
Translator PU is a front-end for the LibreTranslate API created in React. In addition to allowing the user to submit text and select the input and output languages, it also contains functionality for uploading text and image files. The image files are processed by the OCR library Tessaract.js to extract text from them, which is then translated. The app was styled with Bootstrap and deployed with Netlify.

# How to use
Select the language of the source text from the first dropdown menu, and input the source text into the first text box. Select the desired output language in the second dropdown menu. The translated text will appear in the second text box.

To upload a text file, click the "Upload Text File" button on the main page.

To upload an image, navigate to the "Image to Text" page, select a file to upload and click "Upload".

# Tech Stack
- JavaScript
- React
- Bootstrap
- Netlify