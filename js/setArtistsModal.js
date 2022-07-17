

$(document).ready(function () {
    setthumbnails("#artists-list-m2", _m2data);
    setthumbnails("#artists-list-m1", _m1data);
});

function setthumbnails(targetid, artistdata) {
    var targetelement = document.querySelector(targetid);
    for (var i = 0; i < artistdata.length; i++) {
        var content = document.querySelector("#artist-list-template").content;
        var clone = document.importNode(content, true);
        var base = clone.querySelector(".artist-list-base");
        base.id = artistdata[i].base_id;
        var thumbnailimg = clone.querySelector(".artist-list-thumbnail img");
        thumbnailimg.src = artistdata[i].thumb_img_path;
        var name = clone.querySelector(".artist-list-info-name");
        name.textContent = artistdata[i].name;
        var lab = clone.querySelector(".artist-list-info-lab");
        lab.textContent = artistdata[i].lab;
        targetelement.appendChild(clone);
    }
    for (var i = 0; i < artistdata.length; i++) { // 全部一旦出してからやるとうまくいった
        var target = document.querySelector("#" + artistdata[i].base_id);
        $(target).on('click', function () {
            var data = getartistdatafromid(artistdata, this.id);
            showartistmodal(data);
            console.log(data);
            return false;
        });
    }
}
function getartistdatafromid(artistdata, id) {
    for (var i = 0; i < artistdata.length; i++) {
        if (artistdata[i].base_id == id) {
            return artistdata[i].data;
        }
    }
}

function showartistmodal(artistdata) {
    // console.log(artistdata);
    var targetelement = document.querySelector("#artist-modal");
    // ほんとはキャッシュしたいが、しんどいので毎回ページを生成する方針で。
    targetelement.innerHTML = "";

    var content = document.querySelector("#artist-modal-template").content;
    var clone = document.importNode(content, true);
    var background = clone.querySelector(".modal-background");
    var closebutton = clone.querySelector(".modal-close");
    $(background).on('click', function () {
            closeartistmodal();
            return false;
    });
    $(closebutton).on('click', function () {
            closeartistmodal();
            return false;
    });
    var base = clone.querySelector(".modal-base");
    $(base).on('click', function () {
            return false; //backgroundへの伝播をブロック
    });

    var name_ja = clone.querySelector(".modal-name-ja");
    name_ja.textContent = artistdata.name_ja;
    var name_en = clone.querySelector(".modal-name-en");
    name_en.textContent = artistdata.name_en;

    function setwork(number) {
        var target = ".modal-work" + number;
        var work = clone.querySelector(target);
        var img = work.querySelector("img");
        eval("var path = artistdata.work" + number + "_img;");
        img.src = path;
        var caption = work.querySelector(".caption");
        eval("var text = artistdata.work" + number + "_caption;");
        caption.textContent = text;
    }
    setwork(1);
    setwork(2);
    setwork(3);

    var artistinfo = clone.querySelector(".modal-column-info");
    artistinfo.textContent = artistdata.info;

    targetelement.appendChild(clone);

}

function closeartistmodal(){
    var targetelement = document.querySelector("#artist-modal");
    targetelement.innerHTML = "";
}