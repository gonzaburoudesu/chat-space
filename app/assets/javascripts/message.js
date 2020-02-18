$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="main_chat__message__list" data-message-id=${message.id}>
         <div class="main_chat__message__list__upper_info">
           <div class="main_chat__message__list__upper_info__talker">
             ${message.user_name}
           </div>
           <div class="main_chat__message__list__upper_info__date">
             ${message.created_at}
           </div>
         </div>
         <div class="main_chat__message__list__text">
           <p class="main_chat__message__list__text__content">
             ${message.content}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="main_chat__message__list" data-message-id=${message.id}>
         <div class="main_chat__message__list__upper_info">
           <div class="main_chat__message__list__upper_info__talker">
             ${message.user_name}
           </div>
           <div class="main_chat__message__list__upper_info__date">
             ${message.created_at}
           </div>
         </div>
         <div class="main_chat__message__list__text">
           <p class="main_chat__message__list__text__content">
             ${message.content}
           </p>
         </div>
       </div>`
     return html;
   };
 }
$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.main_chat__message').append(html);
    $('.main_chat__message').animate({ scrollTop: $('.main_chat__message')[0].scrollHeight});    
    $('form')[0].reset();
  })
  .fail(function(){
    alert('error');
  });
  return false;
})
});