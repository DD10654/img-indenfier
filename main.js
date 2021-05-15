Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 80
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='snapresult' src='" + data_uri + "'>";
    });
}

console.log("ML5 Version = " + ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hDFAco-YH/model.json", modelloaded);

function modelloaded() {
    console.log("Model Loaded");
}

function check() {
    img = document.getElementById('snapresult');
    classifier.classify(img, gotresult);
}

function gotresult(error, result) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(result);
        document.getElementById("object").innerHTML = result[0].label;
        document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}