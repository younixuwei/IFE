import san from 'san';
import {
    router
} from 'san-router';
import San from './app.san';
require('./base.css')
console.log('我陈一发最牛逼!');

router.add({
    rule: '/',
    Component: San,
    target: '#app'
});
router.start()