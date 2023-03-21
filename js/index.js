
// Save the reference to text-field into a variable. | <input type="text">
let ui = document.getElementById("user-input");
// Save the reference to new-item button into a variable. | <button>ADD ITEM</button> 
let btn = document.getElementById('add');
// Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>
let dc = document.querySelector(".dynamic-content");
// Save the reference to paragraph for feedback | <p class="feedback"></p>
let par = document.querySelector(".feedback");


// Start function addItem.
function addItem(){
    // Create list-item and store output in a variable.
    let item = document.createElement("item");
    // Check if user entered the value in input text-field
    if(ui.value.length > 0){
        // If so:
       // Use textContent property on created list-item and assign it with the value of the text written in the text-field
        item.innerText = ui.value;
        // Append list item to unordered list.
        dc.appendChild(document.createElement("li")).appendChild(item);
        // Clear a feedback-message.
        document.getElementById('feedback').style.visibility = 'hidden';
        // alert('Jam added to your list');
       // Clear the text-field.
        // document.getElementById("user-input").reset();
        document.getElementById("user-input").value="";
       // Put the cursor back to text-field
        document.getElementById("user-input").focus();
        document.getElementById("user-input").select();
    // End if.
    // Otherwise: 
    } else{
        // Print the message nothing entered in the paragraph "feedback"
        // alert('Please, add something to your playlist');
        feed = par.appendChild(document.createElement('p')).innerHTML = "Please, add something to your playlist";
        document.getElementById('feedback').style.visibility = 'visible';
        // End otherwise.
    }  
    // End function addItem.
}

// Register your function addItem for click event on button.
btn.addEventListener("click",addItem);


       
      
    

