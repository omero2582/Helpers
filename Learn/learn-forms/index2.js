const output= document.querySelector('.invite-output');
const input= document.querySelector('#max-invites');

output.textContent = input.value;

input.addEventListener('input', () => {
    console.log(input.value);
    output.textContent = input.value;
    console.log('hi');
});