$(document).ready(function(){  

    $(window).scroll(function() {
        var winScroll = $(this).scrollTop();
        $(".transparentImage").css({
            "transform" : "translate(0, " + winScroll / 100 + "%)"
        });
    });



    $("#myModal").on("hidden.bs.modal",function(){
        $("#iframeYoutube").attr("src","#");
    })
})

function changeVideo(vId){
    var iframe=document.getElementById("iframeYoutube");
    var video = vId.split(",");

    $("#title").text(video[1]);
    iframe.src="https://www.youtube.com/embed/"+video[0];

    $("#myModal").modal("show");
}

