// container of all posts
const posts = js.getEl('posts');

function createPost(postData, userInfo, postId) {

	// container of invidual post
	const post = js.createEl('div', 'post');
	
	// posts in reverse chronological order
	posts.insertBefore(post, posts.firstElementChild);

	// add posts in chronological
	//  posts.appendChild(post);
	
	const text = js.createEl('div', 'post-text', postData.text);
	post.appendChild(text);

	// add profile image
	const userImage = js.createEl('img', 'post-profile-image');
	if (userInfo.imageURL) {
		userImage.src = userInfo.imageURL;
	} else {
		userImage.src = "img/sinon.png";
	}
	post.appendChild(userImage);

	//adds image on post area 
	if (postData.imageURL) {
		const postImage = js.createEl( 'img', 'post-image');
		postImage.src = postData.imageURL;
		post.appendChild(postImage);
	}

	
	// post info 
const info = js.createEl('div', 'post-info');
post.appendChild(info);
	// author userInfo.displayName
	// date js.formatDate(postData.date) 
	
}