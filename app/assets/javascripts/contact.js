$(document).on('click', '#tweet-me', function(){
	$.ajax({
		type: 'POST',
		url: '/tweet_me',
		data: 'tweet_body=' + $('#tweet-body').val(),
		success: function(data, text, xhr){
			console.log(data);
		}
	});
});
