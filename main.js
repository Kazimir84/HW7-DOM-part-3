// let btn = document.getElementById('add');

//     btn.addEventListener('click', function () {        
//         let inputText = document.getElementById('text').value;    
//         let newLi = document.createElement('li');     
//             newLi.innerText = inputText;
//             document.querySelector('ul').append(newLi);
//             newLi.classList.add('yellow');

//         let div = document.createElement('div');
//             div.classList.add('buttonStyle');
//             newLi.append(div);
//             div.addEventListener('click', (event) => {
//                 if (event.target.tagName === 'DIV') {
//                 newLi.remove();
//             }
//         });
//         clearText();
//     });

// function clearText () {
//     document.getElementById('text').value = "";
// };

// let ul = document.getElementById('list').onclick = (event) => {
//     let target = event.target;
//     if (target.className === 'yellow') {
//         target.classList.toggle('green'); 
//     } else {
//         target.classList.toggle('green');       
//     };  
// };

// -----------------------------------------------------
// Исправленный вариант (согласно замечаний)

let btn = document.getElementById('add');
let input = document.getElementById('text');
let ul = document.getElementById('list');

btn.addEventListener('click', () => {
    let newLi = ul.innerHTML;
    newLi += `<li class = "yellow">${input.value}<div class = "buttonStyle"></div></li>`;
    ul.innerHTML = newLi;    
    document.getElementById('text').value = "";
});

ul.addEventListener('click', (event) => {
    let target = event.target;   
    if(event.target.tagName === 'LI') { 
        target.classList.toggle('green');
    } else if (event.target.tagName === 'DIV') {
        event.target.closest('.yellow').remove();
    }
});
