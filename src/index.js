import $ from './js/jquery-vendor'
import _ from 'lodash'
import './style.css'
import printMe from './print'

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('demo');
    return element
}

document.body.appendChild(component());

$("div.demo")
    .css('color', '#fa6565');

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}




