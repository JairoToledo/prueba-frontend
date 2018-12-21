import styles from './scss/main.scss'

import toggleNav from './js/toggle_nav'
import routes from './js/routes';

const footYear = document.querySelector('.Foot-year')
    
footYear.textContent = new Date().getFullYear()

toggleNav()
routes()