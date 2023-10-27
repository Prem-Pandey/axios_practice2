let delbtn = document.getElementById('delete')
    delbtn.style.display = 'none'
       function saveToLocalStorage(event)
       {
        event.preventDefault()
       
        let arr;
        const object = {
             name : event.target.name.value,
             email : event.target.email.value,
             phone : event.target.phone.value,
            //   age :  event.target.age.value
        }
        axios.post("https://crudcrud.com/api/83a088dfbd2b479dbfa6403f2e3c3384/appointmentData", object)
        .then((response)=>{
            showUserOnScreen(response.data)
            console.log(response)
        })
        .catch((err)=>{
            console.log(err)
        })
        
     
       }
        function showUserOnScreen(object)
        {
            const parentEle = document.getElementById('listItems')
            const childEle = document.createElement('li')

            childEle.textContent = object.name + '-' + object.phone + '-'+ object.email
            const delBtn = document.createElement('input')
            delBtn.type = 'button'
            delBtn.value = 'delete'
            delBtn.onclick = () => {
                
                // localStorage.removeItem(object.email)
                
                parentEle.removeChild(childEle)
            }
            const editBtn  = document.createElement('input')
        editBtn.type = 'button'
        editBtn.value = 'edit'
        editBtn.onclick = () => {
            localStorage.removeItem(object.email)
            parentEle.removeChild(childEle)

            document.getElementById('userTag').value = object.name
            document.getElementById('phoneTag').value = object.phone
            document.getElementById('emailTag').value = object.email
            // document.getElementsByTagName('ageTag').value = object.age
        }
            childEle.appendChild(editBtn)
            childEle.appendChild(delBtn)
            parentEle.appendChild(childEle)

        }

    

        
    
