
function addHtmlTableRow(){
    var table = document.getElementById("customers");
    var newRow =table.insertRow(-1);
    console.log(newRow);  
    cell1=newRow.insertCell(0),
    cell2=newRow.insertCell(1),
    cell3=newRow.insertCell(2),
    cell4=newRow.insertCell(3),
    cell5=newRow.insertCell(4),
    cell6=newRow.insertCell(5),
    cell7=newRow.insertCell(6)
    
    checkbox = document.getElementById("checkbox").value,
    fname = document.getElementById("fname").value,
    lname = document.getElementById("lname").value,
    eaddress = document.getElementById("eaddress").value,
    pnumber = document.getElementById("pnumber").value,
    ecategoty = document.getElementById("ecategoty").value,
    rdate = document.getElementById("rdate").value  ;

    var checkbox = `<input type="checkbox">`;
    cell1.innerHTML = checkbox;
    cell2.innerHTML = fname;
    cell3.innerHTML = lname;
    cell4.innerHTML = eaddress;
    cell5.innerHTML = pnumber;
    cell6.innerHTML = ecategoty;
    cell7.innerHTML = rdate;
}

const userTable = document.getElementById('customers');
const userPopup = document.getElementById('userPopup');
const popupContent = document.getElementById('popupContent');

const userRows = document.querySelectorAll('.user-row');
userRows.forEach(row => {
    row.addEventListener('click', () => {
        const email = row.cells[1].textContent;
        const fname = row.cells[2].textContent;
        const lname = row.cells[3].textContent;
        const pnumber = row.cells[4].textContent;
        const ecategory = row.cells[5].textContent;
        const date = row.cells[6].textContent;

        popupContent.innerHTML = `
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Name:</strong> ${fname}</p>
        <p><strong>last name:</strong> ${lname}</p>
        <p><strong>phone number:</strong> ${pnumber}</p>
        <strong>Email category:</strong> <button style="text-align:center" class="emailBtn">${ecategory}</button>

        <p><strong>date:</strong> ${date}</p>
        `;

        userPopup.style.display = 'block';
    });
});

function closePopup() {
    userPopup.style.display = 'none';
}

function dblock(){
    var dnone =document.getElementById("dnone");
    if (dnone.style.visibility == "hidden") {
        dnone.style.visibility = "hidden";
    }
    else {
         dnone.style.visibility = "visible";
      }
}


function openNav() {
    document.getElementById("mySidenav").classList.add('active')
  }
  
  function closeNav() {
    document.getElementById("mySidenav").classList.remove('active')
  }