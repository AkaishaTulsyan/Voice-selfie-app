var SpeechRecognition=window.webkitSpeechRecognition;

var recognition=new SpeechRecognition();

function start(){
    
    document.getElementById("textbox").innerHTML="";

    recognition.start();

}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie")
    {
    speak()
    console.log("taking Selfie");
    }

}
function speak(){
    var synth=window.speechSynthesis;
    var speech="Taking Selfie in five seconds";
    var utter=new SpeechSynthesisUtterance(speech);
    synth.speak(utter);
    Webcam.attach(camera);
    setTimeout(function(){
        takesnapshot();
        save();
    },5000);

}


var camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',jpeg_quality:90
});



function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="selfie" src="'+data_uri+'">"';
    });
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie").src;
    link.href=image;
    link.click();
}
