const element = document.querySelector('.container');
const seResizer = document.querySelector('.se');
const neResizer = document.querySelector('.ne');
const nwResizer = document.querySelector('.nw');
const swResizer = document.querySelector('.sw');
const Resizer = document.querySelectorAll('.resizer');

element.addEventListener('mousedown', mousedown);
// seResizer.addEventListener('mousedown', mousedownSE);
// neResizer.addEventListener('mousedown', mousedownNE);
// nwResizer.addEventListener('mousedown', mousedownNW);
// swResizer.addEventListener('mousedown', mousedownSW);

let isResizing = false;

let currentResizer;


//function to drag the div(box)
function mousedown(e) {
    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup);

    let prevX = e.clientX;
    let prevY = e.clientY;

    function mousemove(e) {
        if(!isResizing) {
            let newX = prevX - e.clientX;
            let newY = prevY - e.clientY;

            const rect = element.getBoundingClientRect();

            element.style.left = rect.left - newX + "px";
            element.style.top = rect.top - newY + "px";

            // element.style.backgroundColor = `rgba(${e.clientX}, 0, 0, 1)`;

            prevX = e.clientX;
            prevY = e.clientY;
        }
    }

    function mouseup() {
        window.removeEventListener('mousemove', mousemove);
        window.removeEventListener('mouseup', mouseup);
    }
}


for(let res of Resizer) {
    res.addEventListener('mousedown', mousedown);

    

    function mousedown(e) {
        let prevX = e.clientX;
        let prevY = e.clientY;

        currentResizer = e.target;

        window.addEventListener('mousemove', mousemove);
        window.addEventListener('mouseup', mouseup);

        function mousemove(e) {
            isResizing = true;
            let newX = prevX - e.clientX;
            let newY = prevY - e.clientY;

            const rect = element.getBoundingClientRect();
            

            if(currentResizer.classList.contains('se')) {
                element.style.width = rect.width - newX + "px";
                element.style.height = rect.height - newY + "px";
            } else if(currentResizer.classList.contains('ne')) {
                element.style.width = rect.width - newX + "px";
                element.style.height = rect.height + newY + "px";
                element.style.top = rect.top - newY + "px";
            } else if(currentResizer.classList.contains('nw')) {
                element.style.width = rect.width + newX + "px";
                element.style.height = rect.height + newY + "px";
                element.style.top = rect.top - newY + "px";
                element.style.left = rect.left - newX + "px";
            } else {
                element.style.width = rect.width + newX + "px";
                element.style.height = rect.height - newY + "px";
                element.style.left = rect.left - newX + "px";
            }

            prevX = e.clientX;
            prevY = e.clientY;

            
        }

        function mouseup() {
            window.removeEventListener('mousemove', mousemove);
            window.removeEventListener('mouseup', mouseup);
            isResizing = false;
        }
    }
}



// function mousedownSE(e) {
//     window.addEventListener('mousemove', mousemoveSE);
//     window.addEventListener('mouseup', mouseupSE);

//     let prevX = e.clientX;
//     let prevY = e.clientY;

//     function mousemoveSE(e) {
        // isResizing = true;
        // let newX = prevX - e.clientX;
        // let newY = prevY - e.clientY;

        // let rect = element.getBoundingClientRect();

        // element.style.width = rect.width - newX + "px";
        // element.style.height = rect.height - newY + "px";

//         prevX = e.clientX;
//         prevY = e.clientY;


//     }

//     function mouseupSE() {
//         window.removeEventListener('mousemove', mousemoveSE);
//         window.removeEventListener('mouseup', mouseupSE);
//         isResizing = false;
//     }
// }

// function mousedownNE(e) {
//     window.addEventListener('mousemove', mousemoveNE);
//     window.addEventListener('mouseup', mouseupNE);

//     let prevX = e.clientX;
//     let prevY = e.clientY;

//     function mousemoveNE(e) {
//         isResizing = true;
//         let newX = prevX - e.clientX;
//         let newY = prevY - e.clientY;

//         let rect = element.getBoundingClientRect();

        // element.style.width = rect.width - newX + "px";
        // element.style.height = rect.height + newY + "px";
        // element.style.top = rect.top - newY + "px";

//         prevX = e.clientX;
//         prevY = e.clientY;


//     }

//     function mouseupNE() {
//         window.removeEventListener('mousemove', mousemoveNE);
//         window.removeEventListener('mouseup', mouseupNE);
//         isResizing = false;
//     }
// }

// function mousedownNW(e) {
//     window.addEventListener('mousemove', mousemoveNW);
//     window.addEventListener('mouseup', mouseupNW);

//     let prevX = e.clientX;
//     let prevY = e.clientY;

//     function mousemoveNW(e) {
//         isResizing = true;
//         let newX = prevX - e.clientX;
//         let newY = prevY - e.clientY;

//         let rect = element.getBoundingClientRect();

//         if(rect.left >= rect.right) {
//             window.removeEventListener('mousemove', mousemoveNW);
//             // window.removeEventListener('mouseup', mouseupNW)
//         }

        // element.style.width = rect.width + newX + "px";
        // element.style.height = rect.height + newY + "px";
        // element.style.top = rect.top - newY + "px";
        // element.style.left = rect.left - newX + "px";

//         prevX = e.clientX;
//         prevY = e.clientY;


//     }

//     function mouseupNW() {
//         window.removeEventListener('mousemove', mousemoveNW);
//         window.removeEventListener('mouseup', mouseupNW);
//         isResizing = false;
//     }
// }

// function mousedownSW(e) {
//     window.addEventListener('mousemove', mousemoveSW);
//     window.addEventListener('mouseup', mouseupSW);

//     let prevX = e.clientX;
//     let prevY = e.clientY;

//     function mousemoveSW(e) {
//         isResizing = true;
//         let newX = prevX - e.clientX;
//         let newY = prevY - e.clientY;

//         let rect = element.getBoundingClientRect();

        // element.style.width = rect.width + newX + "px";
        // element.style.height = rect.height - newY + "px";
        // element.style.top = rect.top - newY + "px";
        // element.style.left = rect.left - newX + "px";

//         prevX = e.clientX;
//         prevY = e.clientY;


//     }

//     function mouseupSW() {
//         window.removeEventListener('mousemove', mousemoveSW);
//         window.removeEventListener('mouseup', mouseupSW);
//         isResizing = false;
//     }
// }

