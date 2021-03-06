//url = "https://project-1-api.herokuapp.com/?api_key=";
//apiKey = "5d3f6448-e9d0-43f9-b9ba-53ff05ab10c0";

//GET request
axios.get("https://project-1-api.herokuapp.com/comments/?api_key=5d3f6448-e9d0-43f9-b9ba-53ff05ab10c0")
    .then(newList =>{

        var elim = document.querySelectorAll(".section-five__comment-container, .section-five__divider");
        
        elim.forEach(element => {
            element.remove()
        })

        const allComments = document.getElementById("allComments");
        
        var commentDivider = document.createElement("div");
        commentDivider.classList.add("section-five__divider");
    
        allComments.appendChild(commentDivider);

        var apiArray = newList.data
        var arrayLength = apiArray.length;

        for (var i = 0; i < arrayLength; i++) {
        createComment(apiArray[i])
        }

        function createComment(newComment){

            const allComments = document.getElementById("allComments");
        
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
            
        //InnerHTML Name field
            commentName.innerHTML = apiArray[i].name;
        
            commentCredentials.appendChild(commentName);
        
            var commentDate = document.createElement("h4");
            commentDate.classList.add("section-five__old-comment--date");
            
            var dateStamp = new Date(apiArray[i].timestamp);
            var date = dateStamp.getDate();
            var month = dateStamp.getMonth();
            var year = dateStamp.getFullYear();
            var formattedDate = (month+1) + "/" + date + "/" + year;

        //InnerHTML Date field
            commentDate.innerHTML = formattedDate;
            
            commentCredentials.appendChild(commentDate);
        
            var commentText = document.createElement("h4");
            commentText.classList.add("section-five__old-comment--comment");
            
        //InnerHTML Comment field
            commentText.innerHTML = apiArray[i].comment;
        
            comment.appendChild(commentText);
        
            var commentDivider = document.createElement("div");
            commentDivider.classList.add("section-five__divider");
        
            allComments.appendChild(commentDivider);
        }
    })

var commentForm = document.getElementById('commentForm');

document.addEventListener('submit', function() {
    event.preventDefault();

    //POST request
    axios.post("https://project-1-api.herokuapp.com/comments/?api_key=5d3f6448-e9d0-43f9-b9ba-53ff05ab10c0", {
        name:event.target.commName.value,
        comment: event.target.commComment.value
    })
        .then(Response => {
            axios.get("https://project-1-api.herokuapp.com/comments/?api_key=5d3f6448-e9d0-43f9-b9ba-53ff05ab10c0")
            .then(newList =>{

                commentForm.reset();
        
                var elim = document.querySelectorAll(".section-five__comment-container, .section-five__divider");
                
                elim.forEach(element => {
                    element.remove()
                })

                var commentDivider = document.createElement("div");
                commentDivider.classList.add("section-five__divider");
            
                allComments.appendChild(commentDivider);

                var apiArray = newList.data
                var arrayLength = apiArray.length;

                for (var i = 0; i < arrayLength; i++) {
                createComment(apiArray[i])
                }

                function createComment(newComment){
                
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
                    
                //InnerHTML Name field
                    commentName.innerHTML = apiArray[i].name;
                
                    commentCredentials.appendChild(commentName);
                
                    var commentDate = document.createElement("h4");
                    commentDate.classList.add("section-five__old-comment--date");
                    
                    var dateStamp = new Date(apiArray[i].timestamp);
                    var date = dateStamp.getDate();
                    var month = dateStamp.getMonth();
                    var year = dateStamp.getFullYear();
                    var formattedDate = (month+1) + "/" + date + "/" + year;

                //InnerHTML Date field
                    commentDate.innerHTML = formattedDate;
                    
                    commentCredentials.appendChild(commentDate);
                
                    var commentText = document.createElement("h4");
                    commentText.classList.add("section-five__old-comment--comment");
                    
                //InnerHTML Comment field
                    commentText.innerHTML = apiArray[i].comment;
                
                    comment.appendChild(commentText);
        
                    var commentDivider = document.createElement("div");
                    commentDivider.classList.add("section-five__divider");
                
                    allComments.appendChild(commentDivider);
                }
            })
        })
        .catch(error => {
            console.log(error);
        });
});