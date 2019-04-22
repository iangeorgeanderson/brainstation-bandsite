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

commentForm.onsubmit = (event) => {
    event.preventDefault();

    
    var commName = event.target.commName.value;
    var commComment = event.target.commComment.value;
    var commDate = new Date();

    console.log(`${commName}`);
    console.log(`${commComment}`);
    console.log(`${commDate}`);

    console.log(commentArray);

}