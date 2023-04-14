document.addEventListener("DOMContentLoaded" ,() => {
    fetch ("https://randomuser.me/api/?results=16")
    .then(response=> {
        return response.json();
    })
    .then ((patientdata) =>{
        let arrayPatients = patientdata.results;
        let patientContainer = "";
for (let patient of arrayPatients){
    patientContainer +=`<div class="patient"><div class="patient-info"><img class="avatar" src=${patient.picture.large}>
    <div>Имя: ${patient.name.first}</div>
        <div><strong>Фамилия: </strong>${patient.name.last}</div>
        <div><strong>Email:${patient.email}</strong><br></div>
    <div><strong>Адрес:  </strong>${patient.location.country}</div>
    <div><strong>Телефон: </strong>${patient.phone}</div></div>
</div></div>`;

} 
document.getElementById("patientContainer").innerHTML = patientContainer;

    })
 .catch(error => console.log(error));
});
function onDelete(){
    document.querySelector("#result").innerHTML = '';
}
