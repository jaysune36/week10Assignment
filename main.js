document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.querySelector('.submit-btn');
  let tableDoc = document.querySelector('.table-doc');
  let tableBody = tableDoc.querySelector('tbody');

  function empIDCreate() {
    return Math.floor(Math.random() * 2000) + 1;
  }

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target === submitBtn) {
      let firstName = document.querySelector('#first-name');
      let lastName = document.querySelector('#last-name');
      let deptName = document.querySelector('#dept');
      if(firstName.value !== '' && lastName.value !== '' && deptName.value !== '') {
      tableBody.innerHTML += `
            <tr>
              <td>${empIDCreate()}</td>
              <td>${firstName.value}</td>
              <td>${lastName.value}</td>
              <td>${deptName.value}</td>
            </tr>
          `;
        firstName.value ='';
        lastName.value = '';
        deptName.value = '';
          } else {
        alert('Please entered the Required information before continuing!')
      }
      } 
      
  });

});
