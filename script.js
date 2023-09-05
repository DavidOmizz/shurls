const menuToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarlink = document.querySelector("[data-nav-link-container]");
const navbar = document.querySelector("[data-nav-container]");


const header = document.querySelector("[data-header-container]");
// const header = document.getElementsByTagName('header')

// menuToggleBtn.addEventListener("click", function () {
//   menuToggleBtn.classList.toggle("active");
//   navbarlink.classList.toggle("active");
// });

if(header){
  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 100) {
      // navbar.classList.add("active");
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });
} else {
  console.error('Header element is not found')
}


  // document.addEventListener("DOMContentLoaded", function () {
  //   const header = document.querySelector(".header");
  
  //   if (header) {
  //     window.addEventListener("scroll", function () {
  //       if (window.scrollY > 100) {
  //         header.classList.add("active");
  //       } else {
  //         header.classList.remove("active");
  //       }
  //     });
  //   } else {
  //     console.error('Header element not found.');
  //   }
  // });
  
  

// const shortenedLink = document.querySelectorAll('[data-input-link]')

// const btnCopyLink = document.querySelector('[data-btn-copy-link]')

// // const btnCopyLinkClick = document.getElementById('btn-copied-text');

// btnCopyLink.addEventListener('click', ()=> {
//     shortenedLink.forEach((link)=> {
//         console.log(link.value);
//     })

// });

// ---------------------------------------------------------------------

// Get all the buttons with the data attribute
// const btnCopyLinks = document.querySelectorAll('[data-btn-copy-link]');

// // Iterate through each button
// btnCopyLinks.forEach((btnCopyLink) => {
//     // Find the input element associated with the button
//     const inputLink = btnCopyLink.parentElement.querySelector('[data-input-link]');

//     // Add click event listener to each button
//     btnCopyLink.addEventListener('click', () => {
//         // Copy the value from the input element
//         const linkValue = inputLink.value;

//         // You can now use the linkValue as needed (e.g., copying to clipboard)
//         console.log(linkValue);
//     });
// });

// Not Working Yet ------------------------------------

// -----------------------------------------------------------------------------

// const shortenBtn = document.querySelector('[data-shorten-btn]');
// const contForAllInput = document.querySelector('.services-check');

// shortenBtn.addEventListener('click', () => {
//     const linkBefore = document.createElement('input');
//     const linkAfter = document.createElement('input');
//     const copyLinkBtn = document.createElement('button');

//     const inputCont = document.createElement('div');
//     inputCont.classList.add ('services-input')

//     linkBefore.value = 'Hello World';
//     linkAfter.value = 'This is a test'
//     copyLinkBtn.textContent = 'copy';

//     linkBefore.type = 'text';
//     linkBefore.id = 'Input1';

//     // linkAfter.dataset = 'data-input-link'
//     // copyLinkBtn.dataset = 'data-btn-copy-link'
//     copyLinkBtn.setAttribute('data-btn-copy-link', '');
//     linkAfter.setAttribute('data-input-link','')

//     inputCont.appendChild(linkBefore);
//     inputCont.appendChild(linkAfter);
//     inputCont.appendChild(copyLinkBtn);
//     contForAllInput.appendChild(inputCont);

//     // btnCopyLinks.forEach((btnCopyLink) => {
//         //     btnCopyLink.addEventListener('click', () => {
//             //         alert('Hello');
//             //     });
//             // });

// });

// // Get all the buttons with the data attribute
// const btnCopyLinks = document.querySelectorAll('[data-btn-copy-link]');

// // Iterate through each button
// btnCopyLinks.forEach((btnCopyLink) => {
//     // Find the input element associated with the button
//     const inputLink = btnCopyLink.parentElement.querySelector('[data-input-link]');

//     // Add click event listener to each button
//     btnCopyLink.addEventListener('click', () => {
//         // Copy the value from the input element to the clipboard
//         const linkValue = inputLink.value;
//         // Create a temporary textarea element to copy the value to clipboard
//         const tempTextarea = document.createElement('textarea');
//         tempTextarea.value = linkValue;
//         document.body.appendChild(tempTextarea);
//         tempTextarea.select();
//         document.execCommand('copy');
//         document.body.removeChild(tempTextarea);

//         // Update the button text to indicate that the link has been copied
//         btnCopyLink.textContent = 'Copied!';
//         btnCopyLink.classList.add('btn-copied');

//         // Optional: Reset the button text after a certain time
//         setTimeout(() => {
//             btnCopyLink.textContent = 'Copy';
//             btnCopyLink.classList.remove('btn-copied');

//         }, 3000); // Reset after 2 seconds
//     });
// });

// ---------------------------------------------------

// Working Code --------------------------------------
// const shortenBtn = document.querySelector('[data-shorten-btn]');
// const inputedLink = document.querySelector('[data-link]');
// const contForAllInput = document.querySelector('.services-check');

// shortenBtn.addEventListener('click', () => {

//     if(inputedLink.value != ''){

//         const linkBefore = document.createElement('input');
//         const linkAfter = document.createElement('input');
//         const copyLinkBtn = document.createElement('button');

//         const inputCont = document.createElement('div');
//         inputCont.classList.add('services-input');

//         // linkBefore.value = 'Hello World';
//         linkBefore.value = inputedLink.value
//         const textValue = `${inputedLink.value}/dggg`
//         linkAfter.value = textValue
//         copyLinkBtn.textContent = 'Copy';

//         linkBefore.type = 'text';
//         linkBefore.id = 'Input1';

//         copyLinkBtn.setAttribute('data-btn-copy-link', '');
//         linkAfter.setAttribute('data-input-link', '');

//         inputCont.appendChild(linkBefore);
//         inputCont.appendChild(linkAfter);
//         inputCont.appendChild(copyLinkBtn);
//         contForAllInput.appendChild(inputCont);

//         // Get the created button
//         const btnCopyLink = inputCont.querySelector('[data-btn-copy-link]');

//         // Add click event listener to the created button
//         btnCopyLink.addEventListener('click', () => {
//             const linkValue = linkAfter.value;
//             const tempTextarea = document.createElement('textarea');
//             tempTextarea.value = linkValue;
//             document.body.appendChild(tempTextarea);
//             tempTextarea.select();
//             document.execCommand('copy');
//             document.body.removeChild(tempTextarea);

//             btnCopyLink.textContent = 'Copied!';
//             btnCopyLink.classList.add('btn-copied');

//             setTimeout(() => {
//                 btnCopyLink.textContent = 'Copy';
//                 btnCopyLink.classList.remove('btn-copied');
//             }, 3000); // Reset after 3 seconds
//         });

//     } else {
//         alert('Please Enter a link')
//     }

// });

// Working Code 2 --------------------------------------
const shortenBtn = document.querySelector("[data-shorten-btn]");
const inputedLink = document.querySelector("[data-link]");
const contForAllInput = document.querySelector(".services-check");

const urlSectionErrorMessage = document.querySelector(".url-section-error")
// urlSectionErrorMessage.style.color = "red";
// urlSectionErrorMessage.style.fontSize = "10px";
// urlSectionErrorMessage.style.textAlign = "left"
// urlSectionErrorMessage.style.marginLeft = "25px"
// urlSectionErrorMessage.style.marginTop = "-7px"


const shortenUrl = async () => {
  if (inputedLink.value != "") {
    // alert('hyyy')
    const linkBefore = document.createElement("input");
    const linkAfter = document.createElement("input");
    const copyLinkBtn = document.createElement("button");
    
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputedLink.value}`)
    const data = await response.json();
    // const shortUrl = data.result.full_short_link;
    console.log(data.result.full_short_link);

    const inputCont = document.createElement("div");
    inputCont.classList.add("services-input");

    // linkBefore.value = 'Hello World';
    linkBefore.value = inputedLink.value;
    const textValue = inputedLink.value;
    linkAfter.value = data.result.full_short_link;
    copyLinkBtn.textContent = "Copy";

    linkBefore.type = "text";
    linkBefore.id = "Input1";

    copyLinkBtn.setAttribute("data-btn-copy-link", "");
    linkAfter.setAttribute("data-input-link", "");

    inputCont.appendChild(linkBefore);
    inputCont.appendChild(linkAfter);
    inputCont.appendChild(copyLinkBtn);
    contForAllInput.appendChild(inputCont);

    // Get the created button
    const btnCopyLink = inputCont.querySelector("[data-btn-copy-link]");

    // Add click event listener to the created button
    btnCopyLink.addEventListener("click", () => {
      const linkValue = linkAfter.value;
      const tempTextarea = document.createElement("textarea");
      tempTextarea.value = linkValue;
      document.body.appendChild(tempTextarea);
      tempTextarea.select();
      document.execCommand("copy");
      document.body.removeChild(tempTextarea);

      btnCopyLink.textContent = "Copied!";
      btnCopyLink.classList.add("btn-copied");

      setTimeout(() => {
        btnCopyLink.textContent = "Copy";
        btnCopyLink.classList.remove("btn-copied");
      }, 3000); // Reset after 3 seconds
    });
  } else {
    // swal("Please enter a text", "", "error");
    // Toastify({

    //     text: "This is a toast",
        
    //     duration: 3000
        
    //     }).showToast();
    alert("Please Enter a link");
    // Toastify({
    //     text: "This is a toast",
    //     duration: 3000,
    //     destination: "https://github.com/apvarun/toastify-js",
    //     newWindow: true,
    //     close: true,
    //     gravity: "top", // `top` or `bottom`
    //     position: "right", // `left`, `center` or `right`
    //     stopOnFocus: true, // Prevents dismissing of toast on hover
    //     style: {
    //     //   background: "linear-gradient(to right, #00b09b, #96c93d)",
    //     },
    //     onClick: function(){} // Callback after click
    //   }).showToast();
    inputedLink.classList.add('active')
    urlSectionErrorMessage.innerHTML = "Please Enter a link"
  }
};


const check = ()=> {
    alert('hey there');
}

shortenBtn.addEventListener("click", shortenUrl);

//   function copyPassword() {
//     var copyText = document.getElementById("getText");
//     copyText.select();
//     document.execCommand("copy");
//     alert('Text copied')
//     console.log(copyText.value);
// }
