document.addEventListener("DOMContentLoaded", () => {
  // I grabbed the key elements on the HTML page using the querySelector on the DOM, that I would need which are the submit button and the table fields.
  const submitBtn = document.querySelector('.submit-btn');
  let tableDoc = document.querySelector('.table-doc');
  let tableBody = tableDoc.querySelector('tbody');

  // Created a function that accepts no parameters. Returns the Math Floor and Math Random methods to give me a random number for the employee ID.
  function empIDCreate() {
    return Math.floor(Math.random() * 2000) + 1;
  }

  // Using the 'click' event on the submitBtn varialbe to check if has been clicked and passed the 'e' or event argument.
  submitBtn.addEventListener('click', (e) => {
    // Added the e.preventDefault so the page doesn't reload when the submit button has been clicked in the form field.
    e.preventDefault()
    // Conditon statment checks that only the submitBtn was clicked and nothing else. 
    if (e.target === submitBtn) {
      // Using the let keyword and querySelector on DOM to create 3 varialbes that will be the first, last, and dept name fields within the form.
      let firstName = document.querySelector('#first-name');
      let lastName = document.querySelector('#last-name');
      let deptName = document.querySelector('#dept');
      // Conditon statment checks that the 3 variables values are true and not empty. If anyone of the fields is empty then an alert will pop up before the information is submitted to the table.
      if(firstName.value !== '' && lastName.value !== '' && deptName.value !== '') {
        // Using the innerHTML method on the tableBody variable, I used the '+=' or addition assignment to add a new tr tag and the values of each variable(first, last, dept name) to td tags as well as calling the empIDCreate function and creating a random ID number for the employee.
        tableBody.innerHTML += `
            <tr>
              <td>${empIDCreate()}</td>
              <td>${firstName.value}</td>
              <td>${lastName.value}</td>
              <td>${deptName.value}</td>
            </tr>
          `;
        // Once the tableBody has been added I reset the value of each input field back to empty strings. 
        firstName.value ='';
        lastName.value = '';
        deptName.value = '';
          } else {
        alert('Please entered the Required information before continuing!')
      }
      } 
      
  });

});
