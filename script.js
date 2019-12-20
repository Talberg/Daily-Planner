var times = ['9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm']







for(i=0;i<times.length;i++){
    var row = $(`<div class= "row" data-time= ${times[i]}</div>`)
    $('.container').append(row)
    
    console.log(row)
}