function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.padding = "30px 10px";
      document.getElementById("lcon-search").style.fontSize = "25px";
    } else {
      document.getElementById("navbar").style.padding = "80px 10px";
      document.getElementById("lcon-search").style.fontSize = "35px";
    }
  }


var downloadButton = document.getElementById("download");
var counter = 3;
var newElement = document.createElement("p");
newElement.innerHTML = "3sec";
var id;

downloadButton.parentNode.replaceChild(newElement, downloadButton);

function startDownload() {
    this.style.display = 'none';
    id = setInterval(function () {
        counter--;
        if (counter < 0) {
            newElement.parentNode.replaceChild(downloadButton, newElement);
            clearInterval(id);
        } else {
            newElement.innerHTML = +counter.toString() + " Sec";
        }
    }, 1500);
};

var clickbtn = document.getElementById("btn");
clickbtn.onclick = startDownload;
