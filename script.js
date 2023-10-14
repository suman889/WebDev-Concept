
const list = document.getElementById('list');


list.addEventListener('click', (e) => {
    console.dir(e.target);
    const clickedElement = e.target;
    if (clickedElement.matches("li")) {
        // Get the current background color of the clicked element.
        const currentBackgroundColor = clickedElement.style.backgroundColor;

        // If the current background color is not transparent, then deselect the clicked element.

        if (currentBackgroundColor !== 'transparent') {
            clickedElement.style.backgroundColor = 'transparent';
        } else if(clickedElement.innerText ==="Python"){
            // If the current background color is transparent, then select the clicked element.
            clickedElement.style.backgroundColor = '#F99417';
        }else{
            clickedElement.style.backgroundColor ="#5272F2"
        }


        // if (e.target.innerText === "Python") {
        //     e.target.style.backgroundColor = "#5272F2";
        // } else {
        //     e.target.style.backgroundColor = "#F99417";
        // }
    }
})

const addElement = (item) => {

    const newElement = document.createElement("li");
    const val = document.querySelector('input').value;
    newElement.textContent = val;
    list.appendChild(newElement);
}






