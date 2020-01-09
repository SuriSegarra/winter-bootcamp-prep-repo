const box = document.getElementById('sign-in-header');

const myInput= document.getElementById ('Suri');
const button = document.getElementById('suri-button');

const changeValue =() => {
    
    const oldValue = () => {
        box.textContent = `Sign in`
    }
    box.textContent = `You're In`

setTimeout (oldValue, 3000);

}

button.addEventListener('click', changeValue)


