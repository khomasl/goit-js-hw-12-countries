import { alert, error } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';

export function notifyAlert () {
    alert({
        delay: 4000,
        text: "Don`t found. Please enter a correct query!"
      });
}

export function notifyError(msg) {
    error({
        delay: 4000,
        text: msg,
      });
};