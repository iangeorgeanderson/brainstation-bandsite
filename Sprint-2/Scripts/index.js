var commentForm = document.getElementById('commentForm');

var comment1 = {
    name: 'Michael Lyons',
    date: '12/18/2018',
    comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
};
var comment2 = {
    name: 'Gary Wong',
    date: '12/12/2018',
    comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
};
var comment3 = {
    name: 'Theodore Duncan',
    date: '11/15/2018',
    comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
};

console.log(comment1.comment);
console.log(comment2.comment);
console.log(comment3.comment);

var commentArray = [];

commentArray.push(comment1);
commentArray.push(comment2);
commentArray.push(comment3);

console.log(commentArray);

commentForm.addEventListener('submit', function() {
    event.preventDefault();

    var newComment = {
        name: event.target.commName.value,
        date: new Date(),
        comment: event.target.commComment.value
    }
    commentArray.push(newComment);

    console.log(commentArray);
    commentForm.reset();
    
    var parent = document.getElementById("allComments")
    
    var elim = document.querySelectorAll(".section-five__comment-container, .section-five__divider");
    console.log(elim);
    // parent.remove(elim);
    elim.forEach(element => {
        element.remove()

    })

    var arrayLength = commentArray.length;
    for (var i = 0; i < arrayLength; i++) {
    createComment(commentArray[i])
    }
});

function createComment(newComment){

    const allComments = document.getElementById("allComments");
   
    // var allComments = document.createElement("div");
    // allComments.classList.add("section-five__all-comments");

    // allCommentsWrapper.appendChild(allComments);
    
    var commentContainer = document.createElement("div");
    commentContainer.classList.add("section-five__comment-container");

    allComments.appendChild(commentContainer);
    
    var commentPicture = document.createElement("div");
    commentPicture.classList.add("section-five__old-comment-picture");

    commentContainer.appendChild(commentPicture);

    var comment = document.createElement("div");
    comment.classList.add("section-five__old-comment");

    commentContainer.appendChild(comment);

    var commentCredentials = document.createElement("div");
    commentCredentials.classList.add("section-five__old-comment-credentials");

    comment.appendChild(commentCredentials);

    var commentName = document.createElement("h3");
    commentName.classList.add("section-five__old-comment--name");
    commentName.innerHTML = newComment.name;

    commentCredentials.appendChild(commentName);

    var commentDate = document.createElement("h4");
    commentDate.classList.add("section-five__old-comment--date");
    commentDate.innerHTML = newComment.date;
    
    commentCredentials.appendChild(commentDate);

    var commentText = document.createElement("h4");
    commentText.classList.add("section-five__old-comment--comment");
    commentText.innerHTML = newComment.comment;
    
    comment.appendChild(commentText);

    var commentDivider = document.createElement("div");
    commentDivider.classList.add("section-five__divider");

    allComments.appendChild(commentDivider);
}