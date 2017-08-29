var box = document.getElementById('box');
var h1 = document.getElementById("h1");
var car = document.getElementById("car");
var count = 0;


function elConfirm($this) {
    if ($this.value === "oa" || $this.value === "ua") {
        box.style.display = "none";
        h1.style.display = "none";
    } 
    
    if ($this.value === "ok") {
        car.style.visibility = "visible";
    }
    
    if ($this.value === "null") {
        alert("please select an option");
        car.style.visibility = "hidden";
    }
}

function clickFun() {
    box.style.display = "none";
    h1.style.display = "none";
}


function ilConfirm($this) {
    if($this.value === "neg20" || $this.value === "45") {
        box.style.display = "none";
        h1.style.display = "none";
    }
    
    
}

function bConfirm($this) {
    if($this.value === "own" || $this.value === "less") {
       box.style.display = "none";
       h1.style.display = "none"; 
    }
}

function hConfirm() {
    box.style.display = "none";
    h1.style.display = "none";
}

function pConfirm() {
    box.style.display = "none";
    h1.style.display = "none";
}


//button disappears after quiz ends ~6 clicks//

$(document).ready(function(){
    $("#car").on('click', function(){
        count = count +1;
        if(count == 6) {
            $('#car').hide();
        }
    });
});

//on submit, div class="item" disappears//

$(document).ready(function(){
    $("#button").on('click', function(){
        $('#box').hide();
        $('h1').hide();
        $("#cong").show();
        return false;
    }); 
});

//if checkbox is not checked//
$(document).ready(function(){
    $("#button").on('click', function(){
       if (jQuery("#check").is(":checked")){
           return true;
       } 
        else {
            alert("please check the box to proceed");
            $('#box').show();
            $('h1').show();
            $("#cong").hide();
            return false;
        }
    });
});


// hides carousel  //





























