Template.comment.helpers({
    avatar: function(){
        return Meteor.user().profile.avatar;
    }

});



Template.comment.events({
    'keyup #comment-text': function(e, t){
            e.preventDefault();

            var inputVal = t.find('#comment-text').value;

            if(!!inputVal.trim() && inputVal != "") {
                var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
                if (charCode == 13) {

                    console.log("charCode: ", charCode, inputVal, this.postid);

                    Meteor.call('insertComment', inputVal, this.postid);

                    Session.set("commentForPost" + this.postid, Session.get("commentForPost" + this.postid) + 1);
                    t.find('#comment-text').value = "";
                    return true;
                }
            }

    }
});
