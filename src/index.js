import _ from 'lodash';
import printMe from './print.js';


function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    let n=0

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = ()=>{
        n+=1
        printMe(n);
    } 

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}