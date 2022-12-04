document.write("<p> HELLO WORLD </p>");
        
        let actionbutton = document.getElementById("action");

        let displayscreen = document.getElementById("display");
        

        actionbutton.addEventListener("click", () =>{

            //alert('This is the TRUTH-TRANSMITTER PAGE');

            displayscreen.innerHTML = `<small>
                You shall know the truth and
                 the truth shall set you free.
                 <strong> John 8:32</strong> 
                 </small>`;

                 displayscreen.style.backgroundColor="yellow";



        } )

        let homebutton = document.getElementById("home");

        homebutton.addEventListener("click",  ()  =>{
            displayscreen.innerHTML="";
            displayscreen.style.backgroundColor="white";
        } )
