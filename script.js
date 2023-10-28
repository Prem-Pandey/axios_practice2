let delbtn = document.getElementById('delete')
delbtn.style.display = 'none'
function saveToLocalStorage(event) {
    event.preventDefault()

    let arr;
    var object = {
        name : event.target.name.value,
        email : event.target.email.value,
        phone : event.target.phone.value,
        //   age :  event.target.age.value
    }
    axios.post("https://crudcrud.com/api/83a088dfbd2b479dbfa6403f2e3c3384/appointmentData", object)
        .then((response) => {
            showUserOnScreen(response.data)
            console.log(response)
        })
        .catch((err) => {
            console.log(err)
        })


}
window.addEventListener("DOMContentLoaded", () => {

    axios.get("https://crudcrud.com/api/83a088dfbd2b479dbfa6403f2e3c3384/appointmentData")
        .then((response) => {
            console.log(response)
            for (let i = 0; i < response.data.length; i++) {
                showUserOnScreen(response.data[i])
            }

        })
        .catch((error) => {
            console.log(error)

        })
})
function showUserOnScreen(object) {
    
    const parentEle = document.getElementById('listItems')
    const childEle = document.createElement('li')

    document.getElementById('userTag').value = object.name
        document.getElementById('phoneTag').value = object.phone
        document.getElementById('emailTag').value = object.email


    childEle.textContent = object.name + '-' + object.phone + '-' + object.email
    const delBtn = document.createElement('input')
    delBtn.type = 'button'
    delBtn.value = 'delete'
    delBtn.onclick = () => {

        // localStorage.removeItem(object.email)

        parentEle.removeChild(childEle)
        axios.delete(`https://crudcrud.com/api/83a088dfbd2b479dbfa6403f2e3c3384/appointmentData/${object._id}`)
            .then((response) => {
                // If the deletion is successful, remove the element from the UI
                parentEle.removeChild(childEle);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const editBtn = document.createElement('input')
    editBtn.type = 'button'
    editBtn.value = 'edit'
    editBtn.onclick = () => {
        parentEle.removeChild(childEle);
        axios.put(`https://crudcrud.com/api/83a088dfbd2b479dbfa6403f2e3c3384/appointmentData/${object._id}`, {
            name : object.name,
            phone : object.phone,
            email : object.email,
        })
        .then((response)=>{
            console.log(response.data)
            // showUserOnScreen(response.data)
        })
        .catch((error)=>
        {
            console.log(error)
        })
        // localStorage.removeItem(object.email)
        parentEle.removeChild(childEle)
        

        // document.getElementById('userTag').value = object.name
        // document.getElementById('phoneTag').value = object.phone
        // document.getElementById('emailTag').value = object.email
        // document.getElementsByTagName('ageTag').value = object.age

    }
    childEle.appendChild(editBtn)
    childEle.appendChild(delBtn)
    parentEle.appendChild(childEle)

}





