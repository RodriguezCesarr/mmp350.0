const publishText = document.getElementById('publish-text');
const publishButton = document.getElementById('publish-button');

publishText.addEventListener('keyup', function(event){
	if (event.which == 13) {
		publishPost();
	}
})

publishButton.addEventListener('click', publishPost);

function publishPost() {
	const uid= fb.getUID();
	fb.publishPost(uid, publishText.value);
	publishText.value = ""; //reset text area
}