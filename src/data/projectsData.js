// src/data/projectsData.js

const projectsData = [
  {
    id: 1,
    title: "College Admission Application Form",
    description: "The College Admission Application Form project employs an extensive technology stack encompassing HTML, CSS, JavaScript, XAMPP, PHP, MySQL, Apache, Git, and DevOps tools. Through collaborative development, it crafts an interactive front-end interface using HTML, CSS, and JavaScript. Seamlessly integrating XAMPP, PHP, and MySQL, the back-end infrastructure adeptly manages data operations and storage, with the Apache web server facilitating robust web hosting. Employing Git and DevOps tools bolsters version control and collaborative workflows, while Docker containers optimize deployment. The inclusion of CI/CD pipelines further enhances development by automating integration, testing, and culminating in a holistic solution that simplifies admission management through technology.",
    githubLink: "https://github.com/Jyothika083/devopps_final_project",
    image: "app.jpg" // Update with actual image file name
  },
  {
    id: 2,
    title: "ResQFood, Food Donation App",
    description: "ResQFood, our innovative food donation app, is built on the belief that everyone can make a positive impact, and it all starts with the food we share. Unlike traditional donation apps, ResQFood allows you to contribute not just financially but with the abundance of delicious, wholesome food. With diverse food categories, real-time tracking, and a commitment to reducing food waste, ResQFood empowers you to connect with your community in a meaningful way. The app employs Figma for creating UI/UX, wireframing, and prototyping, and utilizes Flutter and Firebase for the development and backend services, respectively. Android Studio is used for the app's development environment.",
    githubLink: "https://github.com/Jyothika083/ResQFood-Food-Donation-App",
    image: "app.jpg" // Update with actual image file name
  },
  {
    id: 3,
    title: "Resume Parser using NLP",
    description: "In developing a resume parser using NLP, the project handles data loading using the JSON library and applies data preprocessing with pandas. The dataset is split into training and testing sets using the train_test_split function from sklearn.model_selection. For the NER training pipeline, the spaCy library is used to train a custom Named Entity Recognition model on annotated resume data, customizing it to recognize resume-specific entities. The NER model is evaluated using spaCy and custom scripts, with validation metrics including precision, recall, and F1-score. Document parsing employs the PyMuPDF library to extract text from PDF resumes, with text preprocessing using regular expressions or string libraries to clean and standardize data. Resume classification utilizes TF-IDF vectorization from sklearn.feature_extraction.text to transform resume text into numerical features, representing the data numerically for a pre-trained classifier. A pre-trained classifier like KNN from sklearn is used to categorize resumes into predefined job roles",
    githubLink: "https://github.com/Jyothika083/Resume_Parser",
    image: "nlp.jpg" // Update with actual image file name
  }
];

export default projectsData;
