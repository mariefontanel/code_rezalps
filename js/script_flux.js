// Formulaire d'inscription : gris au focus
// $(document).ready(function() {
//   $("#form_inscription input")
//   .focus(function(){
//     $(this).css("background-Color", "lightgrey");
//   })
//   .blur(function(){
//     $(this).css("background-Color", "");
//   });
// //Affichage d'un seul formulaire selon pro ou perso qui souhaite créer un compte
// //masquer "entreprise" et l'afficher si click.
//   $("#form1").css("background-color", "#b7bbbf"); // mise en couleur du bouton correspondant au formulaire actif
//   $("#my_form2").hide();
// // Formulaire d'inscription : Choix perso ou entreprise
//   $("#form1").on('click',function(event){
//     $("#my_form2").hide();
//     $("#my_form1").fadeIn(700);
//     $("#form1").css("background-color", "#b7bbbf"); // mise en couleur du bouton correspondant au formulaire actif
//     $("#form2").css("background-color", "#E0E5E9"); // le bouton redevient de la couleur "normale"
//   });

//   $("#form2").on('click',function(event){
//     $("#my_form1").hide();
//     $("#my_form2").fadeIn(700);
//     $("#form2").css("background-color", "#b7bbbf"); // mise en couleur du bouton correspondant au formulaire actif
//     $("#form1").css("background-color", "#E0E5E9"); // le bouton redevient de la couleur "normale"
//   });

// });


    // PLUGIN COMMENTS PAGE FLUX//

$('#new_publications').comments({
    profilePictureURL: 'https://app.viima.com/static/media/user_profiles/user-icon.png',
    getComments: function(success, error) {
        var commentsArray = [{
            id: 1,
            created: '',
            content: '',
            fullname: '',
            upvote_count: 0,
            user_has_upvoted: false
        }];
        success(commentsArray);
    }
});

$('#new_publications').comments({
    spinnerIconURL: ''
});