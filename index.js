// set pi_string placeholder
let pi_string = '3.14159265358979323846264338327950288419716939937510582097494459230781';
fetch('pi_Mil.txt') // read the text file
    .then(res=>res.text()) // convert to text
    .then(res=>{ // set to variable
        pi_string = res;
    });

// const search_input = document.querySelector('.search');
const before_elem = document.querySelector('.before-result');
const result_elem = document.querySelector('.result');
const after_elem = document.querySelector('.after-result');

function update(search_string){
    let index = pi_string.indexOf(search_string);
    before_elem.innerHTML = '<bdi>' + pi_string.slice(Math.max(index - 20, 0), index) + '</bdi>';
    result_elem.innerHTML = search_string
    after_elem.innerHTML = pi_string.slice(index + search_string.length, index + search_string.length + 20);
}

update('');
