let images = [
    "./img/alberta-2297204_1920.jpg",
    "./img/aurora-1197753_1920.jpg",
    "./img/avenue-815297_1920.jpg",
    "./img/bora-bora-685303_1920.jpg",
    "./img/bridge-53769_1920.jpg",
    "./img/forest-1072828_1920.jpg",
    "./img/godafoss-1840758_1920.jpg",
    "./img/hd-wallpaper-218591_1920.jpg",
    "./img/hd-wallpaper-230014_1920.jpg",
    "./img/hd-wallpaper-275950_1920.jpg",
    "./img/hd-wallpaper-1758197_1920.jpg",
    "./img/hd-wallpaper-1867616_1920.jpg",
    "./img/hd-wallpaper-2435404_1920.jpg",
    "./img/hd-wallpaper-2836301_1920.jpg",
    "./img/hd-wallpaper-2836301_1920.jpg",
    "./img/hd-wallpaper-3021072_1920.jpg",
    "./img/hd-wallpaper-3119826_1920.jpg",
    "./img/hd-wallpaper-3314275_1920.jpg",
    "./img/hd-wallpaper-3314275_1920.jpg",
    "./img/hd-wallpaper-3358468_1920.jpg",
    "./img/hd-wallpaper-3441687_1920.jpg",
    "./img/hd-wallpaper-3533173_1920.jpg",
    "./img/hd-wallpaper-3689760_1920.jpg",
    "./img/hd-wallpaper-3719233_1920.jpg",
    "./img/hd-wallpaper-g3a789cf12_1920.jpg",
    "./img/hd-wallpaper-gb13091212_1920.jpg",
    "./img/hd-wallpaper-gdd451b5f5_1920.jpg",
    "./img/hintersee-3601004_1920.jpg",
    "./img/iceland-1768744_1920.jpg",
    "./img/lake-1802337_1920.jpg",
    "./img/mountains-190055_1280.jpg",
    "./img/mountains-1761292_1920.jpg",
    "./img/nature-3082832_1920.jpg",
    "./img/nature-wallpaper-3087145_1920.jpg",
    "./img/nature-wallpaper-3151869_1920.jpg",
    "./img/road-1072823_1920.jpg",
    "./img/splashing-165192_1280.jpg",
    "./img/sunset-1373171_1920.jpg",
    "./img/sunset-3325080_1920.jpg",
    "./img/thunderstorm-3440450_1920.jpg",
    "./img/tree-736882_1280.jpg",
    "./img/tree-736885.jpg",
  ];

  function render() {
    document.getElementById("content").innerHTML = ``;

    for (i = 0; i < images.length; i++) {
      document.getElementById("content").innerHTML += `
              <div onclick="openImage(${i})" class="imgBox" style="background-image: url(${images[i]});"></div>
          `;
    }
  }

  function openImage(i) {
    document.getElementById("content").innerHTML = ``;
    document.getElementById("content").innerHTML += `
    <div class="backgroundImg">
      <div class="overlay">
        <div onclick="backToImgs()">
          <img src="./img/icons/arrow-121-64.png" alt="Pfeil nach links (zrück)">
        </div>

        <div>
          <div>
            <img src="./img/icons/sharethis-64.png" alt="icen zum sharen">
          </div>
          <div>
            <img onclick="zoomin(${i})" src="./img/icons/zoom-in-64.png" alt="icon Lupe grösser">
          </div>
          <div>
            <img onclick="zoomout(${i})" src="./img/icons/zoom-out-64.png" alt="icon Lupe kleiner">
          </div>    
          <div>
            <img src="./img/icons/info-2-64.png" alt="icon informiation">
          </div>
          <div onclick="like()">
            <img class="star" id="star" src="./img/icons/star-4-64.png" alt="icon Stern">
          </div>
          <div>
            <img src="./img/icons/delete-64.png" alt="icon Abfalleimer">
          </div>
          <div class="dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
      </div>
      
      <div class="showImage">
        <img id="${i}" src="${images[i]}" />
      </div>
    </div>
    `;
  }

  // <div id="${i}" style="background-image: url(${images[i]});">
  // </div>

  function backToImgs() {
    document.getElementById("content").innerHTML = ``;
    render();
  }

  function zoomin(i) {
    let zoomin = document.getElementById(i);
    let currWidth = zoomin.clientWidth;
    let currHeight = zoomin.clientHeight;
    zoomin.style.width = currWidth + 100 + "px";
    zoomin.style.height = currHeight + 100 + "px";
  }

  function zoomout(i) {
    let zoomout = document.getElementById(i);
    let currWidth = zoomout.clientWidth;
    let currHeight = zoomout.clientHeight;
    zoomout.style.width = currWidth - 100 + "px";
    zoomout.style.height = currHeight - 100 + "px";
  }

let toggle = false;

function like() {
  if(toggle === true) {
    document.getElementById('star').src = './img/icons/star-4-64.png';
  } else {
    document.getElementById('star').src = './img/icons/star-64.png';
  }
  toggle = !toggle;

}







