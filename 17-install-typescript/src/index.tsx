import * as ReactDOM from 'react-dom';
import { App } from './app/App';

import './styles.css';

const domTarget = document.querySelector('#my-react-app');

ReactDOM.render(<App />, domTarget);