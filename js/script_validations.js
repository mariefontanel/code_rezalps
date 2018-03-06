//lancement du plugin validate de JQuery !!! 

$(document).ready(function () {


  $.validator.addMethod("valid_siret", function(value) {
    var siret;
    var somme = 0;
    var tempo;
     // Les 9 premiers chiffres sont ceux du SIREN (ou RCS), les 4 suivants
     // correspondent au numéro d'établissement
     // et enfin le dernier chiffre est une clef de LUHN. 
    for (var i = 0; i < value.length; i++) {
        if ((i % 2) == 0) { // Les positions impaires : 1er, 3è, 5è, etc... 
            tempo = value.charAt(i) * 2; // On le multiplie par 2
            if (tempo > 9) {
                tempo -= 9;   // Si le résultat est supérieur à 9, on lui soustrait 9
            }
        }
        else {
            tempo = value.charAt(i);
            somme += parseInt(tempo);
        }
    }
        if ((somme % 10) == 0) {
            siret = true; // Si la somme est un multiple de 10 alors le SIRET est valide 
        } else {
            siret = false;
        }
    return siret
    });


    // ajout regex mot de passe pour plugin validate
    /*$.validator.addMethod("mp_force", function(value) {
        var lowerCaseRegexp = /^[a-zA-Z]*[0-9]+[a-zA-Z]*$/;
        var upperCaseRegexp = /[A-Z]+/;
        //var numericRegexp = /^[0-9]+$/;
        var specialCharRegexp = /[-\/\\^$*+?._()|[\]]+/;
       return lowerCaseRegexp.test(value) 
           && upperCaseRegexp.test(value) // contient une majuscule
           //&& numericRegexp.test(value) // contient un chiffre
    });*/

     $.validator.addMethod("mp_force", function(value) {
        var lowerCaseRegexp = /[a-z]+/;
        var upperCaseRegexp = /[A-Z]+/;
        var numericRegexp = /[0-9]+/;
        // var specialCharRegexp = /[-\/\\^$*+?._()|[\]]+/;
        return lowerCaseRegexp.test(value) 
           && upperCaseRegexp.test(value) // contient une majuscule
           && numericRegexp.test(value) // contient un chiffre
           // && specialCharRegexp.test(value) // contient un caractère spécial

    });

    // ajout regex email pour plugin validate
    $.validator.addMethod("regex_email", function(value, element) {
        var mailformat = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;
       return mailformat.test(value) 
    });


    $("#my_form1").validate( { //on lance la fonction/méthode validate pour Formulaire personnel !!!!
        rules: { //on précises les règles voulues sur les name des inputs
            name: {
                required: true,
                minlength: 2
            },
            email_connexion: {   
                required: true,
                regex_email: true
            },
            mp_connexion : {
                required: true,
                minlength: 5,
                mp_force: true
            },
            ville: {
                required: true
            },
            cgu: {
                required: true
            },
        },
        messages: { //on choisit les messages d'erreur à afficher selon les champs
            name: {
                required:"Merci d'indiquer un nom",
                minlength: "Ce champs doit contenir au moins 2 caractères"
            },
            email_connexion: {
                required: "Merci de renseigner un email",
                regex_email: "Merci de renseigner un email valide"
            },
            mp_connexion: {
                required: "Choisissez un mot de passe",
                minlength: "Minimum 5 caractères",
                mp_force: "Doit contenir au moins un chiffre + une majuscule et un caractère spécial"
            },
            ville: {
                required: "Merci de renseigner une ville"
            },
            cgu: {
                required: "Merci d'accepter nos CGU"
            },
        },
    });
    $("#my_form2").validate( { //on lance la fonction/méthode validate pour Formulaire pro !!!!
        rules: { //on précises les règles voulues sur les name des inputs
            Entreprise: {
                required: true,
                minlength: 2
            },
            email_connexion: {   
                required: true,
                regex_email: true
            },
            mp_connexion: {
                required: true,
                minlength: 5,
                mp_force: true
            },
            ville: {
                required: true
            },
            siret: {
                required:true,
                number: true,
                minlength: 14,
                maxlength: 14,
                valid_siret: true
            },
            cgu: {
                required: true
            },
        },
        messages: { //on choisit les messages d'erreur à afficher selon les champs
            Entreprise: {
                required:"Merci d'indiquer un nom d'entreprise",
                minlength: "Ce champs doit contenir au moins 2 caractères"
            },
            email_connexion: {
                required: "Merci de renseigner un email",
                regex_email: "Merci de renseigner un email valide"
            },
            mp_connexion: {
                required: "Choisissez un mot de passe",
                minlength: "Minimum 5 caractères",
                mp_force: "Doit contenir au moins un chiffre + une majuscule et un caractère spécial"
            },
            ville: {
                required: "Merci de renseigner une ville"
            },
            siret: {
                required: "Merci de renseigner un siret",
                number: "Merci de renseigner un siret valide",
                minlength: "Merci de renseigner un siret valide",
                maxlength: "Merci de renseigner un siret valide",
                valid_siret: "Merci de vérifier votre saisie"
            },
            cgu: {
                required: "Merci d'accepter nos CGU"
            },
        },
    });
});


 
// vérification MP (merci Rémi)

// function verification_password() {
//     var lowerCaseRegexp = /[a-z]+/;
//     var upperCaseRegexp = /[A-Z]+/;
//     var numericRegexp = /[0-9]+/;
//     var specialCharRegexp = /[-\/\\^$*+?._()|[\]]+/;
//     var lengthRegexp = /.{8,}/;
//     var password_level = 0;
//     if (lowerCaseRegexp.test($(this).val())) {
//         password_level++;
//         console.log("lower", password_level);
//     }
//     if (upperCaseRegexp.test($(this).val())) {
//         password_level++;
//         console.log("upper", password_level);
//     }
//     if (numericRegexp.test($(this).val())) {
//         password_level++;
//         console.log("numeric", password_level);
//     }
//     if (specialCharRegexp.test($(this).val())) {
//         password_level++;
//         console.log("special", password_level);
//     }
//     if (lengthRegexp.test($(this).val())) {
//         password_level++;
//         console.log("length", password_level);
//     }
//     console.log("password_level total", password_level);
//     affichage_couleur_level($(this), password_level);
//     if (password_level >= 5) {
//         console.log("input level in check function (true): ", password_level);
//         return true;
//     }
//     else {
//         console.log("input level in check function (false): ", password_level);
//         return false;
//     }
// }


// // différentes couleur selon complexité MP.
// function affichage_couleur_level(user_input, input_level) {
//     if (user_input.value == "") {
//         user_input.css('background-color', '#fba');  // red
//     }
//     else {
//         if (input_level == 0) {
//             user_input.css('background-color', "#FFF"); // white
//         }
//         if (input_level == 1) {
//             user_input.css('background-color', "#ff0000"); // red
//         }
//         if (input_level == 2) {
//             user_input.css('background-color', "#ff9900"); // orange
//         }
//         if (input_level == 3) {
//             user_input.css('background-color', "#ffcc00"); // dark yellow
//         }
//         if (input_level == 4) {
//             user_input.css('background-color', "#ffff00"); // yellow
//         }
//         if (input_level == 5) {
//             user_input.css('background-color', "#7FDD4C"); // green
//         }
//         console.log("input level in color function : ", input_level)
//     }
// }



// Appel de la vérfication MP formulaire.
// $("#mp").on('change select blur keyup', verification_password);
// $(password_confirm).on('change select blur keyup', confirmation_password);

