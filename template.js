function main() {

  var mijnLinks = document.getElementsByClassName("slide");

  for (var teller = 0; teller < mijnLinks.length; teller++) {


      mijnLinks[teller].onclick = function(){
      document.getElementsByTagName("li")[0].className="";
      document.getElementsByTagName("li")[1].className="";
      document.getElementsByTagName("li")[2].className="";
      document.getElementsByTagName("li")[3].className="";

      this.parentElement.className ="visit";

      console.log("het werk!")

      document.getElementsByClassName("imageslide")[0].className="onzichtbaar";
      document.getElementsByClassName("imageslide")[1].className="onzichtbaar";
      document.getElementsByClassName("imageslide")[2].className="onzichtbaar";
      document.getElementsByClassName("imageslide")[3].className="onzichtbaar";



      var deJuisteModus = this.getAttribute("data-naam");
      document.getElementById(deJuisteModus).className="";

      console.log("het werk!")
      };



  };
};

window.onload = function() {
       main();
}
