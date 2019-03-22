




$(function() {

    $("#cotationForm").submit(function(event){
    	
        
        event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $('input[name=name]').val();
            var phone = $('input[name=phone]').val();
            var email = $('input[name=email]').val();
            var produit =$("#produit option:selected").text();
            var qualite = $("#qualite option:selected").text();
            var quantite = $('input[name=quantite]').val();
            var adresse = $('input[name=adresse]').val();
            var entreprise = $('input[name=entreprise]').val();
            var origin = "DEMANDE DE COTATION" ;
           // console.log(name+phone+email+produit+quantite);
        
            var datas = {
                        service_id: 'default_service',
                        template_id: 'quotation',
                        user_id: 'user_3YgMBvF2Oth6uB0fDXFwO',
                        template_params: {
                                           "email": email,
                                           "name": name,
                                           "phone": phone,
                                           "produit": produit,
                                           "quantite": quantite,
                                           "adresse": adresse,
                                           "entreprise": entreprise,
                                           "qualite": qualite,
                                           "origin" : origin
                                         }
                      };
           event.preventDefault();
         $("#submit").text("PATIENTEZ...");
            $.ajax({
                url: "https://api.emailjs.com/api/v1.0/email/send",
                type: "POST",
                data: JSON.stringify(datas),
                cache: false,
                contentType: 'application/json', 
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    // $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    //     .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>" + name + ", Votre message a bien été envoyé. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    $("#submit").text("SOUMETTRE");
                    //clear all fields
                    $('#cotationForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    // $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    //     .append("</button>");
                    $('#success > .alert-danger').append("<strong>Désolé " + name + ", notre système ne repond pas...</strong> Pouvez-vous nous écrire directment à universalmaritimegroup@gmail.com, Désolé pour ce problème!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                  //  $('#contactForm').trigger("reset");
                    $("#submit").text("SOUMETTRE");

                },
            });
        
        
    });
});



function fillProduct(){ 
 // this function is used to fill the category list on load
addOption(document.drop_list.produit, "Riz 50kg", "Riz 50kg", "");
addOption(document.drop_list.produit, "Huile 25 litres", "Huile 25 litres", "");
}

function SelectQuality(){
// ON selection of category this function will work

removeAllOptions(document.drop_list.qualite);
addOption(document.drop_list.qualite, "", "Qualité", "");

if(document.drop_list.produit.value == 'Riz 50kg'){
addOption(document.drop_list.qualite,"5% parabole indien", "5% parabole indien");
addOption(document.drop_list.qualite,"25% brisure indien", "25% brisure indien");
}
if(document.drop_list.produit.value == 'Huile 25 litres'){
addOption(document.drop_list.qualite,"Huile végétale", "Huile végétale");

}


}
////////////////// 

function removeAllOptions(selectbox)
{
	var i;
	for(i=selectbox.options.length-1;i>=0;i--)
	{
		//selectbox.options.remove(i);
		selectbox.remove(i);
	}
}


function addOption(selectbox, value, text )
{
	var optn = document.createElement("OPTION");
	optn.text = text;
	optn.value = value;

	selectbox.options.add(optn);
}
