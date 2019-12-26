var times = ['9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm']







for(i=0;i<times.length;i++){
    var row = $(`<div id=${times[i]} class= "row m2" data-time= ${times[i]}></div>`)
    var time = $(`<div class='col-md-2 data-time=${times[i]}'></div>`)
    var textArea = $(`<div class='col-md-8' data-name=${times[i]}><form></form></div>`)
    var form = $(`<form><textarea class="form-control" id="text${times[i]}" rows="3"></textarea></form>`)
    var button = $(`<div class='col-md-2 btn btn-primary' data-time=${times[i]}'><i class="fas fa-save"></div>`)
    var p = $(`<p>${times[i]}</p>`)



    textArea.append(form)
    time.append(p)
    row.append(time)
    row.append(textArea)
    row.append(button)
    $('.container').append(row)

    
    
}