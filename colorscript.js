/* <--remove this



document.addEventListener("DOMContentLoaded", function(){
 
    var textcolor = document.getElementsByClassName("accentcolor"),i, len;
    var BGcolor = document.getElementsByClassName("accentBG"),i, len;

    
    Colors = {};
    Colors.names = {
        aqua: "#00ffff",
        azure: "#f0ffff",
        black: "#000000",
        blue: "#0000ff",
        brown: "#a52a2a",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgrey: "#a9a9a9",
        darkgreen: "#006400",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkviolet: "#9400d3",
        fuchsia: "#ff00ff",
        gold: "#ffd700",
        green: "#008000",
        indigo: "#4b0082",
        khaki: "#f0e68c",
        lightblue: "#add8e6",
        lightcyan: "#e0ffff",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        magenta: "#ff00ff",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        orange: "#ffa500",
        pink: "#ffc0cb",
        purple: "#800080",
        violet: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        
    };



    Colors.random = function() {
        var result;
        var count = 0;
        for (var prop in this.names)
            if (Math.random() < 1/++count)
               result = prop;
        return result;
    }
    
    color = Colors.random();
    console.log(color);

    for(i = 0, len = textcolor.length; i < len; i++){
    textcolor[i].style.color = color;
    }
    
    for(i = 0, len = BGcolor.length; i < len; i++){
    BGcolor[i].style.backgroundColor = color;
    }       

});

AND THIS --> */