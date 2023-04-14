let patients = [];
const dataField = document.getElementById('data-field');
loadData();
dataAdd.addEventListener('click', () => {

   let dataSurname = document.getElementById('data-surname');
   let dataName = document.getElementById('data-name');
   let dataLastname = document.getElementById('data-lastname');
   let dataPhone = document.getElementById('data-phone');
   let dataEmail = document.getElementById('data-email');

   let patient = {
      name: dataSurname.value,
      surname: dataName.value,
      lastname: dataLastname.value,
      phone: dataPhone.value,
      email: dataEmail.value,
      time: Math.floor(Date.now() / 1000)
   }
   dataSurname.value = '';
   dataName.value = '';
   dataLastname.value = '';
   dataPhone.value = '';
   dataEmail.value = '';
   patients.push(patient);
   saveData();
   showData();

});

function saveData() {
   localStorage.setItem('patients', JSON.stringify(patients));
   showData();
}

function loadData() {
   if (localStorage.getItem('patients')) patients = JSON.parse(localStorage.getItem('patients'));
}

function showData() {

   let out = '';
   patients.forEach(function (item) {

      out += `<ul><div class="dataPatient"><i class="far fa-trash-alt delete" onclick="finishTask(this)" ></i> 
<p><em>${item.name}</em></p>
<p><em>${item.surname}</em></p><p><em>${item.lastname}</em></p><p>${item.phone}</p><p>${item.email}</p><p><em>${timeConverter(item.time)}</em></p></div></ul>`;
   });
   dataField.innerHTML = out;
}

function timeConverter(UNIX_timestamp) {
   let a = new Date(UNIX_timestamp * 1000);
   let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
   let year = a.getFullYear();
   let month = months[a.getMonth()];
   let date = a.getDate();
   let hour = a.getHours();
   let min = a.getMinutes();
   let sec = a.getSeconds();
   let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
   return time;

}

function finishTask(sender) {
   let del = sender.parentElement;
   del.parentNode.parentNode.removeChild(del.parentNode);
   del = '';
}

function myDelete() {
   localStorage.setItem('patients', undefined, JSON.stringify(patients));
   patients = [];
   dataField.innerHTML = '';
}