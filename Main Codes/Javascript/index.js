const failed = "Invalid ID please use Your correct ID";

const profile = document.getElementById('profile');
profile.addEventListener('click', handle);

function handle(){
    const input = prompt('Please Enter Correct Input');

    if (input && input.toLowerCase() === 'class') {
        window.location.href = "/Main Codes/Html Files/selection.html";
    } else {
        console.log(failed);
        alert(failed);
    }

    if (input && input.toLowerCase() === 'home' ) {
        window.location.href = "/Main Codes/Html Files/page4.html";
    }
}
