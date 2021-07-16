let btn = document.getElementById('add');

    btn.addEventListener('click', function () {        
        let inputText = document.getElementById('text').value;    
        let newLi = document.createElement('li');     
            newLi.innerText = inputText;
            document.querySelector('ul').append(newLi);
            newLi.classList.add('yellow');

        let div = document.createElement('div');
            div.classList.add('buttonStyle');
            newLi.append(div);
            div.addEventListener('click', (event) => {
                if (event.target.tagName === 'DIV') {
                newLi.remove();
            }
        });
        clearText();
    });

function clearText () {
    document.getElementById('text').value = "";
};

let ul = document.getElementById('list').onclick = (event) => {
    let target = event.target;
    if (target.className === 'yellow') {
        target.classList.toggle('green'); 
    } else {
        target.classList.toggle('green');       
    };  
};