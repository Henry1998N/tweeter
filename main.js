const tweeter = Tweeter();
const renderer = Render();

renderer.renderPosts(tweeter.getPosts());

$("#post").on("click", () => {
  let text = $("#input").val();
  tweeter.addPost(text);
  $("#input").val("");
  $("#posts").empty();
  renderer.renderPosts(tweeter.getPosts());
});

$("#posts").on("click", ".delete", function () {
  let postId = $(this).data().id;
  tweeter.removePost(postId);
  $("#posts").empty();
  renderer.renderPosts(tweeter.getPosts());
});

$(`#posts`).on("click", ".btns", function () {
  let commentText = $(this).closest("div").find(".input").val();
  let postId = $(this).data().id;
  tweeter.addComment(commentText, postId);
  $("#posts").empty();
  renderer.renderPosts(tweeter.getPosts());
});

$(`#posts`).on("click", ".delete-comment", function () {
  let postId = $(this).data().postid;
  let commentId = $(this).data().commentid;
  tweeter.removeComment(postId, commentId);
  $("#posts").empty();
  renderer.renderPosts(tweeter.getPosts());
});
