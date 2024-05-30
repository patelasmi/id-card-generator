/**
 * Function to populate values in card from form input
 */
function generateCard() {
    // Get value of Student name from form input 
    const nameElement = document.getElementById('name');

    // Assign the value of student name to generated card
    let studentName = nameElement.value;
    const cardName = document.getElementById('cardName');
    cardName.innerHTML = studentName;

    // Get value of college name from form input 
    const collegeNameElement = document.getElementById('collegeName');

    // Assign the value of college name to generated card
    let collegeName = collegeNameElement.value;
    const cardCollegeName = document.getElementById('cardCollegeName');
    cardCollegeName.innerHTML = collegeName;

    
    // Get value of location name from form input 
    const locationElement = document.getElementById('location');
    
    // Assign the value of location name to generated card
    let location = locationElement.value;
    const cardLocation = document.getElementById('cardLocation');
    cardLocation.innerHTML = location;

    // Display final generated card to user     
    document.getElementById("collegeCard").style.display = "block";
}

