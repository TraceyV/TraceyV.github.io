function myFunction(menu) {
    menu.classList.toggle("change");
  
    const mobileElement = document.querySelector("#mobile");
    mobileElement.classList.toggle("show");
  
    if (mobileElement.classList.contains("show")) {
        mobileElement.querySelectorAll('*').forEach(child => {
            child.addEventListener('click', function() {
                mobileElement.classList.remove("show"); 
            });
        });
    }
  }