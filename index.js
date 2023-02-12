import './index.css';
import logo from './image/logo.png';
import vectorText from './image/vector-text.png';
import vector from './image/vector.png';

const headerImage = document.querySelector('.header--logo');
headerImage.src = logo;

const footerVector = document.querySelector('.footer-logo-container--icon');
footerVector.src = vector;

const footerVectorText = document.querySelector('.footer-logo-container--text');
footerVectorText.src = vectorText;