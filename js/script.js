const comments = []

//Get value of input
const saveValue = () => {
    const value = $('.comment-input').val()
    if (value.length > 0) {
        comments.push(value)
        clearInput()
        showComment()
    }
}

//Clear input
const clearInput = () => {
    $('.comment-input').val('')
}

//Take elements in array and show as a list
function showComment (arg = null) {
    $('#list > li').remove();
    for (i = 0; i < comments.length; i++){
        if (i === arg) {
            $('#list').append(
                `<li ><input type="text"  class="input-edit" value="${comments[i]}" onkeydown="pressEnterEdit(event, ${i})">
                <button type="button" onclick="editComment(${i})">Edit</button></li>`
                )
            
        } 
        else {
            $('#list').append(
                `<li id="${i}" onclick="showComment(${i})">${comments[i]}
                <span onclick="showComment(${i})"> 
                <a  href="#" onclick="removeComment(${i})">
                delete
                </a>
                <a  href="#" onclick="showComment(${i})">
                edit
                </a>
                </span>
                </li>`)
        }
    }
}

//splice element by index
const removeComment = (index) => {
    comments.splice(index, 1)
    showComment()
} 

//Edit a comment
const editComment = (arg) => {
    console.log(comments)
    const editedComment = $('.input-edit').val()
    comments.splice(arg, 1, editedComment)
    showComment()
   
}

//Add comment pressing enter
function pressEnter (e) {
    if (e.keyCode === 13) {
        saveValue()
    }
}

  
//edit comment pressing Enter key
function pressEnterEdit (e, arg) {
    if (e.keyCode === 13) {
        const editedComment = $('.input-edit').val()
        comments.splice(arg, 1, editedComment)
        showComment()
    }
}

