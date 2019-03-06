/*
  Jquery Validation using jqBootstrapValidation
   example is taken from jqBootstrapValidation docs 
  */
$(function() {

    $("#contactForm").submit(function(event){
        
        event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $('input[name=name]').val();
            var phone = $('input[name=phone]').val();
            var email = $('input[name=email]').val();
            var message = $('#message').val();
            var subject = $('input[name=subject]').val();
            var origin = "FORMULAIRE DE CONTACT" ;
            //console.log(name+phone+email+message+subject);
        
            var datas = {
                        service_id: 'default_service',
                        template_id: 'template_YzTDaVGl',
                        user_id: 'user_3YgMBvF2Oth6uB0fDXFwO',
                        template_params: {
                                           "email": email,
                                           "name": name,
                                           "phone": phone,
                                           "subject": subject,
                                           "message": message,
                                           "origin" : origin
                                         }
                      };
           event.preventDefault();
         $("#contactForm").find("button").text("PATIENTEZ...");
            $.ajax({
                url: "https://api.emailjs.com/api/v1.0/email/send",
                type: "POST",
                data: JSON.stringify(datas),
                cache: false,
                contentType: 'application/json', 
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>" + name + ", Votre message a bien été envoyé. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                 $("#contactForm").find("button").text("ENVOYER");

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Désolé " + name + ", notre système ne repond pas...</strong> Pouvez-vous nous écrire directment à <a href='mailto:me@example.com?Subject=Message_Me from xcodevs.com;>inbox@xcodevs.com</a> ? Désolé pour ce problème!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                  //  $('#contactForm').trigger("reset");
                 $("#contactForm").find("button").text("ENVOYER");

                },
            });
        
        
    });

   


   // souscribe form 


   $(".souscribeForm").submit(function(event){
        
        event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $('#name_sc').val();
            var email = $('#email_sc').val();
            var origin = "SOUSCRIPTION NEWSLETTER" ;
            console.log(name+email);
        
            var datas = {
                        service_id: 'default_service',
                        template_id: 'template_YzTDaVGl',
                        user_id: 'user_3YgMBvF2Oth6uB0fDXFwO',
                        template_params: {
                                           "email": email,
                                           "name": name,
                                           "origin" : origin
                                         }
                      };
           event.preventDefault();
         $(this).find("button").text("PATIENTEZ...");
            $.ajax({
                url: "https://api.emailjs.com/api/v1.0/email/send",
                type: "POST",
                data: JSON.stringify(datas),
                cache: false,
                contentType: 'application/json', 
                success: function() {
                    // Success message
                    $('.success').html("<div class='alert alert-success'>");
                    // $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    //     .append("</button>");
                    $('.success > .alert-success')
                        .append("<strong>" + name + ", Vous êtes bien inscrit à notre lettre d'information! </strong>");
                    $('.success > .alert-success')
                        .append('</div>');

                    $(".souscribeForm").find("button").text("SOUSCRIRE");

                    //clear all fields
                    $('.souscribeForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('.success').html("<div class='alert alert-danger'>");
                    // $('.success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    //     .append("</button>");
                    $('.success > .alert-danger').append("<strong>Désolé " + name + ", notre système ne repond pas...</strong> Pouvez-vous nous écrire directment à <a href='mailto:inbox@xcodevs.com?Subject=Message_Me from xcodevs.com;>inbox@xcodevs.com</a> ? Désolé pour ce problème!");
                    $('.success > .alert-danger').append('</div>');
                    //clear all fields
                  //  $('#contactForm').trigger("reset");
                  $(".souscribeForm").find("button").text("SOUSCRIRE");
                },
            });
        
        
    });
});

