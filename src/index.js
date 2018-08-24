import $ from './js/jquery-vendor'
import _ from 'lodash'

function component() {

    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    element.classList.add('demo')

    return element
}

document.body.appendChild(component());

$("div.demo").css('font-weight', 'bold');




