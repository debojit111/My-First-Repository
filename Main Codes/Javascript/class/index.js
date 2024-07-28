/* const failed = "Invalid ID";
const success = "Success fully page loaded"

const profile = document.getElementById('profile');
profile.addEventListener('click', handle);

function handle(){
    const input = prompt('Enter your ID');

    if (input && input.toLowerCase() === 'class') {
        window.location.href = "/Main Codes/Html Files/selection.html";
    } else {
        console.log(failed);
        alert(failed);
    }

    if (input && input.toLowerCase() === 'home' ) {
        console.log(success);
        alert(success);
        window.location.href = "/Main Codes/Html Files/page4.html";
    }
} */



const failed = "Invalid ID";
const success = "Successfully page loaded";

const profile = document.getElementById('profile');
profile.addEventListener('click', handle);

function handle() {
    const input = prompt('Enter your ID').toLowerCase(); // Convert to lowercase for easier comparison

    if (input === 'class') {
        console.log(success);
        window.location.href = "/Main Codes/Html Files/class/selection.html";
    } else if (input === 'home') {
        console.log(success);
        alert(success);
        window.location.href = "/Main Codes/Html Files/home/index2.html";
    } else {
        console.log(failed);
        alert(failed);
    }
}
