<script lang="ts">

    import { enhance,applyAction } from '$app/forms';
    
      let name = "";
      let email = "";
      let subject = "";
      let message = "";
      let nameError = ""; 
      let emailError = "";
      let subjectError = "";
      let messageError = "";

      $: isValid = {
        name : name != null && name != ""  ,
        emailIsNull : email != null && email != ""  ,
        emailIsValid: /\S+@\S+\.\S+/.test(email),
        subject : subject != null && subject != ""  ,
        message : message != null && message != ""  
      }
      
      function validateForm() { //Submit tıklandığı zaman input alanlarının doğru girildiğini client tarafında kontrol eder başka işlevi yok
         
    
        if (!isValid.name) {
          nameError = "İsim alanı gereklidir";
        
        } else { nameError = ""}
    
        if (!isValid.emailIsNull) {
          emailError = "E-posta alanı gereklidir";
        }  else { emailError = ""}
        if (!isValid.emailIsValid) {
          emailError = "E-postanızı doğru yazdığınızdan emin olun";
        } 
    
        if (!isValid.subject) {
          subjectError = "Başlık gereklidir";
        }  else { subjectError = ""}
    
         if (!isValid.message) {
          messageError = "Mesaj alanını doldurunuz";
        } else { messageError = ""}
        
      }

      function handleSubmit(event: { preventDefault: () => void; }) {   //input alanları doğru ise çalışacak kısım
        event.preventDefault();
        validateForm()
        
              console.log("Form Çalışıyi");
          
          //input alanları ilk kontrolu geçtiğinde asıl işlevi yapacak kodlar
      }
    
    </script> 



<div class="col-lg-6 mb-3 ">
    <div class="contact-form">
        <div id="success"></div>
        <form 
            on:submit={handleSubmit} novalidate={true}
            method="POST"
            use:enhance={({ form, data, action, cancel }) => {
            // `form` is the `<form>` element
            // `data` is its `FormData` object
            // `action` is the URL to which the form is posted
            // `cancel()` will prevent the submission
            return async ({ result, update }) => {
                // `result` is an `ActionResult` object
                // `update` is a function which triggers the logic that would be triggered if this callback wasn't set
                update({reset : true})
                await applyAction(result)
            };
            }}
            name="sentMessage" id="contactForm">
            <div class="control-group">
                <input type="text" class="form-control" id="name" placeholder="İsminiz" 
                class:is-valid={isValid.name} class:is-invalid={!isValid.name} 
                bind:value={name} required={true}/>

                    <p class="help-block text-danger">{nameError}</p>
            </div>

            <div class="control-group ">
                <input type="email"  class="form-control" id="email" placeholder="E-posta adresiniz" 
                 class:is-valid={isValid.emailIsNull && isValid.emailIsValid} class:is-invalid={!isValid.emailIsValid || !isValid.emailIsNull } 
                 bind:value={email} required={true}/>

                <p class="help-block text-danger">{emailError}</p>
            </div>

            <div class="control-group">
                <input type="text" class="form-control" id="subject" placeholder="Başlık" 
                class:is-valid={isValid.subject} class:is-invalid={!isValid.subject} 
                 bind:value={subject} required={true} />

                <p class="help-block text-danger">{subjectError}</p>
            </div>

            <div class="control-group">
                <textarea class="form-control is-valid" rows="6" id="message" placeholder="Mesajınız"  
                class:is-valid={isValid.message} class:is-invalid={!isValid.message} 
                bind:value={message} required={true}></textarea>

                <p class="help-block text-danger">{messageError}</p>
            </div>

            <div>
                <button class="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">
                    Mesajı Gönder
                </button>
            </div>
        </form>
    </div>
</div>