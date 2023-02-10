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
        
      function validateForm() {     //input alanlarının doğru girildiğini client tarafında kontrol eder başka işlevi yok
        let isValid = true;
    
        if (!name) {
          nameError = "İsim alanı gereklidir";
          isValid = false;
        } else {
          nameError = "";
        }
    
        if (!email) {
          emailError = "E-posta alanı gereklidir";
          isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          emailError = "E-postanızı doğru yazdığınızdan emin olun";
          isValid = false;
        } else {
          emailError = "";
        }
    
        if (!subject) {
          subjectError = "Başlık gereklidir";
          isValid = false;
        } else {
          subjectError = "";
        }
    
        if (!message) {
          messageError = "Mesaj alanını doldurunuz";
          isValid = false;
        } else {
          messageError = "";
        }
    
        return isValid;
      }
    
      function handleSubmit(event: { preventDefault: () => void; }) {   //input alanları doğru ise çalışacak kısım
        event.preventDefault();
        if (validateForm()) {
          console.log("Form Çalışıyi");
          //input alanları ilk kontrolu geçtiğinde asıl işlevi yapacak kodlar
          
        }
      }
    
    
    </script>    
        <!-- Contact Start -->
        <div class="container-fluid pt-5">
            <div class="text-center mb-4">
                <h2 class="section-title px-5"><span class="px-2">Contact For Any Queries</span></h2>
            </div>
            <div class="row px-xl-5">
                <div class="col-lg-6 mb-5">
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
                                bind:value={name} required={true}/>
                                    <p class="help-block text-danger">{nameError}</p>
                            </div>
                            <div class="control-group ">
                                <input type="email" class="form-control" id="email" placeholder="E-posta adresiniz" 
                                 bind:value={email} required={true}/>
                                <p class="help-block text-danger">{emailError}</p>
                            </div>
                            <div class="control-group">
                                <input type="text" class="form-control" id="subject" placeholder="Başlık"
                                 bind:value={subject} required={true} />
                                <p class="help-block text-danger">{subjectError}</p>
                            </div>
                            <div class="control-group">
                                <textarea class="form-control" rows="6" id="message" placeholder="Mesajınız" 
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
                 <div  class="col-lg-6 mb-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12040.185453231412!2d28.863332!3d41.0242416!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabbada19bf563%3A0x1287df5115d8ab46!2zRWxpdGHFnyBCdWhhcmzEsSDDnHTDvCBNYWtpbmFsYXLEsQ!5e0!3m2!1str!2str!4v1675993846963!5m2!1str!2str" width="600" height="600" style="border:0;" allowfullscreen={true} loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Elitaş on map"></iframe>
                </div> 
           
                <!--  <div class="col-lg-6 mb-5">
                    <h5 class="font-weight-semi-bold mb-3">Get In Touch</h5>
                    <p>Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et erat clita ipsum justo sed.</p>
                    <div class="d-flex flex-column mb-3">
                        <h5 class="font-weight-semi-bold mb-3">Store 1</h5>
                        <p class="mb-2"><i class="fa fa-map-marker-alt text-primary mr-3"></i>123 Street, New York, USA</p>
                        <p class="mb-2"><i class="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                        <p class="mb-2"><i class="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
                    </div>
                  
                </div>  -->
            </div>
        </div>
        <!-- Contact End -->
    
      