/* on click toggle signin and create account button*/
$('.toggleBtn').click(function () {
    $('.toggleBtn').toggle();
})

/* register to login on click login button */
$('.loginBtn').click(function () {
    $('#Register').hide();
    $('#signIn').show();
    $('.passwordResetBtn').show();
    $('.passwordreset').hide();
  
})

/* on click password reset button  */
$('.passwordResetBtn').click(function () {
    $('#Register').hide();
    $('#signIn').hide();
    $('.passwordreset').show();
    $('.loginBtn').show();
    $('.signUpBtn').hide();
})

/* on click create account button*/
$('.signUpBtn').click(function () {
    $('#Register').show();
    $('#signIn').hide();
    $('.passwordreset').hide();
    $('.loginBtn').show();
    $('.passwordResetBtn').hide();
})


/*=========================for mobile view================================*/

/* on click hide/show forms on mobile register to login */
$('.loginBtn-mobile').click(function () {
    $('#Register').hide();
    $('#signIn').show();
    $('.passwordreset').hide();
})

$('.signUpBtn-mobile').click(function () {
    $('#Register').show();
    $('#signIn').hide();
    $('.passwordreset').hide();
})

/* on  click reset button*/
$('.forgotPassword').click(function () {
    $('#Register').hide();
    $('#signIn').hide();
    $('.passwordreset').show();
    

})



