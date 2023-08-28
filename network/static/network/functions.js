function getCookie(name){
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if(parts.length == 2) return parts.pop().split(';').shift();
}

function submitHandler(id){
    const textareaValue = document.getElementById(`textarea_${id}`).value
    const content = document.getElementById(`content_${id}`);
    const modal = document.getElementById(`modal_edit_post_${id}`);
    fetch(`/edit/${id}`, {
        method: "POST",
        headers: {"Content-type": "application/json", "X-CSRFToken": getCookie("csrftoken")},
        body: JSON.stringify({
            content: textareaValue
        })
    })
    .then(response => response.json())
    .then(result => {
        content.innerHTML = result.data;

        // on every modal change state like in hidden modal
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden', 'true');
        modal.setAttribute('style', 'display: none');

        // get modal backdrops
        const modalsBackdrops = document.getElementsByClassName('modal-backdrop');

        // remove every modal backdrop
        for(let i=0; i<modalsBackdrops.length; i++) {
            document.body.removeChild(modalsBackdrops[i]);
        }
    })
}

function likeHandler(id) {
    const btn = document.getElementById(`${id}`);
    const likeCountElement = document.getElementById(`like-count-${id}`);
    const isLiked = btn.classList.contains('btn-primary');

    if (isLiked) {
      fetch(`/remove_like/${id}`)
        .then(response => response.json())
        .then(result => {
          btn.classList.remove('btn-primary');
          btn.classList.add('btn-secondary');
          updateLikeCount(id);
        });
    } else {
      fetch(`/add_like/${id}`)
        .then(response => response.json())
        .then(result => {
          btn.classList.remove('btn-secondary');
          btn.classList.add('btn-primary');
          updateLikeCount(id);
        });
    }

    function updateLikeCount(postId) {
      fetch(`/get_like_count/${postId}`)
        .then(response => response.json())
        .then(data => {
          likeCountElement.textContent = `Likes: ${data.count}`;
        })
        .catch(error => {
          console.error('Error updating like count:', error);
        });
    }
  }