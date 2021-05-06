function changeBg(){
    const images =[
        'url("home-images/ovinuchi-ejiohuo-vaOosG1lgGE-unsplash.jpg")',
        'url("home-images/carlos-magno-UIx_m6opA1E-unsplash.jpg")',
        'url("home-images/cnn.jpg")',
        'url("home-images/howard-chin-F_nmxz8Z9Sk-unsplash.jpg")',
        'url("home-images/pexels-dazzle-jam-2710063.jpg")',
        'url("home-images/pexels-dazzle-jam-1038041.jpg")',
        
    ]
    const section = document.querySelector('section');
    const bg = images[Math.floor(Math.random() * images.length)];
    section.style.backgroundImage = bg;
}
setInterval(changeBg, 1500)

String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}
console.log("the quick brown fox jumps over the lazy dog".shuffle());
console.log("the quick brown fox jumps over the lazy dog".shuffle());
