// pin-generating-btn pin-showing-field 

document.getElementById('pin-generating-btn').addEventListener('click',function(){
   
    const generatPin = Math.round(Math.random()*1000+1000)

     document.getElementById('pin-showing-field').value = generatPin
})

document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText
    const inputArea = document.getElementById('input-item-field')
    if(isNaN(number)){
        if(number == 'C'){
            inputArea.value = ''
        }
    }else{  
        const previousNum = inputArea.value
         inputArea.value = previousNum + number

    }
})

//pin matcher

document.getElementById('submit-btn').addEventListener('click',function(){

  const pin = document.getElementById('pin-showing-field').value
  const typeNum = document.getElementById('input-item-field').value
  const successMsg = document.getElementById('success-msg')
  const errorMsg = document.getElementById('error-msg')

    if(pin == typeNum){
            errorMsg.style.display = 'block'
            successMsg.style.display = 'none'
          
    }else{
       
        errorMsg.style.display = 'none'
        successMsg.style.display = 'block'
    }
    //value clear
  
})
