<script>
    //math.max
    import { mousePosition } from './store.js';
    import { onMount } from "svelte";
	const coords =  mousePosition();
    

    $: innerWidth = 0;
    $: innerHeight = 0;
    $: ofsetX = innerWidth/2-$coords.x;
    $: musicPaused = false;
    $: volumeMusic = 0;

    function audioSwitch(){
        var music = document.getElementById("ambientMusic");
        !musicPaused ? music.pause() : music.play();
    }
</script>

    <svelte:window bind:innerWidth bind:innerHeight/>

<div id="mainDiv" >
    <audio preload="auto" autoplay="true" loop="true" hidden="true" volume={volumeMusic/100} id="ambientMusic" bind:paused={musicPaused}>
        <source src="/chillSong.wav" type="audio/mpeg"> </audio>

    <button id="freakyBtn">{innerWidth/2}</button>
    <button onclick={()=>{audioSwitch()}}><img id="offOnSwitch" src={musicPaused ? "/off.png" : "/on.png"} alt="ON" style="width:5em;"/></button>
    <input type="range" id="volume" name="volume" min="0" max="100" step="1" bind:value={volumeMusic}/>
    <h1>{ofsetX}</h1>
    <h1>{$coords.y}</h1>
    <div >
        <img src="/mainPlank.webp" alt="plank" id="target" >
    </div>
    
    <div id="waveDiv" style="max-width:100%;width:auto;overflow-x:hidden;height:100px;" >
        <img src="/front.png" alt="beach" style="width: 105%;position:absolute;z-index:1;left:-2%;transform: translateX({ofsetX/700}em) translateY({$coords.y/1400}em);"/>
        <!--<svg preserveAspectRatio="none"
        style="width: 100%;position:absolute;z-index:1;left:0;"  viewBox="0 0 214.303 80.823" xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="b"><stop style="stop-color:#d68b0c;stop-opacity:1" offset="0"/><stop style="stop-color:#e3d378;stop-opacity:0" offset="1"/></linearGradient><linearGradient id="a"><stop style="stop-color:#e3d378;stop-opacity:1" offset="0"/><stop style="stop-color:#e3d378;stop-opacity:0" offset="1"/></linearGradient><linearGradient xlink:href="#a" id="c" x1="102.955" y1="97.245" x2="102.955" y2="114.478" gradientUnits="userSpaceOnUse" gradientTransform="translate(-9.028 -34.623)"/><radialGradient xlink:href="#b" id="d" cx="233.949" cy="119.346" fx="233.949" fy="119.346" r="107.151" gradientTransform="rotate(89.22 194.784 144.448)scale(.32231 1.89878)" gradientUnits="userSpaceOnUse"/></defs><path style="display:inline;fill:url(#c);fill-opacity:1;stroke-width:.264583" d="M10.385 0C3.958.655 6.549.822.14 1.63L0 80.824l214.302-.716-.01-78.211L184.327.31c-5.906.23-10.504 1.224-16.404 1.315l-4.158 1.986-3.88 1.44c.03.08.798 7.86.997 9.324l-3.413 2.078-11.99 9.147-5.115.104-4.186 5.115-5.478-.206-5.322 3.1-2.274.104-4.03 1.395-17.52.413-9.973-1.085-7.842-3.906-10.67-.512-5.846-2.85-16.7-1.169-7.71-6.687-2.554-3.689.321-8.823c-1.352-1.665-1.054-.963-.03-2.685Z"/><path style="fill:url(#d);fill-opacity:1;stroke-width:.264583" d="M10.386 0C3.959.654 6.55.82.14 1.63L0 80.822l214.302-.716-.01-78.211L184.327.31c-5.905.23-10.503 1.225-16.403 1.315l-4.158 1.986-3.88 1.44c.03.08.798 7.861.997 9.324l-3.413 2.079-11.99 9.146-5.115.104-4.186 5.116-5.478-.207-5.322 3.1-2.274.104-4.031 1.395-17.518.414-9.974-1.086-7.842-3.906-10.67-.511-5.846-2.85-16.7-1.17-7.71-6.687-2.554-3.688.321-8.823c-1.352-1.666-1.055-.964-.03-2.685z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="position: absolute;transform: translateX({ofsetX/1000}em) translateY({$coords.y/1500-5}em);">
            <path fill="#0099ff" fill-opacity="1" d="M0,128L60,128C120,128,240,128,360,133.3C480,139,600,149,720,149.3C840,149,960,139,1080,133.3C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>-->
        <svg id="wave1" preserveAspectRatio="none" filter="url(#pixelate) drop-shadow(1em -2em 1em #0000001f)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="position: absolute;top:{($coords.y/1400)+24.5}em;transform: translateX({ofsetX/700}em) translateZ(0);">
            <path fill="#1599ad" fill-opacity="1" 
                d="M 0 128 C 0 128 524.334 151.915 674.949 133.069 C 794.32 118.133 1440 148.379 1440 148.379 L 1440 320 C 1440 320 96 320 48 320 L 0 320 L 0 128 Z">
            </path>
        </svg>
        <svg id="wave2"  preserveAspectRatio="none" filter="url(#pixelate) drop-shadow(1em -2em 1em #0000001f)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="position: absolute;top:{($coords.y/1000)+28}em;transform: translateX({ofsetX/200}em) translateZ(0);">
            <path fill="#24a3b5" fill-opacity="1" 
                d="M 0 128 C 0 128 524.334 151.915 674.949 133.069 C 794.32 118.133 1440 148.379 1440 148.379 L 1440 320 C 1440 320 96 320 48 320 L 0 320 L 0 128 Z">
            </path>
        </svg>
        <svg id="wave3" preserveAspectRatio="none" filter="url(#pixelate) drop-shadow(1em -2em 1em #0000001f)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="position: absolute;top:{($coords.y/500)+36}em;transform: translateX({ofsetX/50}em) translateZ(0);">
            <path fill="#3cbfd2" fill-opacity="1" 
                d="M 0 128 C 0 128 524.334 151.915 674.949 133.069 C 794.32 118.133 1440 148.379 1440 148.379 L 1440 320 C 1440 320 96 320 48 320 L 0 320 L 0 128 Z">
            </path>
        </svg>

    </div>

    <svg style="position:absolute;visibility:hidden;">
        <filter id="pixelate" x="0" y="0">
            <feFlood x="4" y="4" height="1" width="1" result="flood"></feFlood>
            <feComposite width="4" height="4" in="flood" result="composite"></feComposite>
            <feTile in="composite" result="tiled"></feTile>
            <feComposite in="SourceGraphic" in2="tiled" operator="in"></feComposite>
            <feComponentTransfer> <feFuncA type="discrete" tableValues="0 1" /> </feComponentTransfer>
            <feMorphology operator="dilate" radius="2" result="final"></feMorphology>
            
        </filter>
    </svg>

    <svg>
        <filter id="pixelate" x="0" y="0">
            <feFlood x="4" y="4" height="2" width="2"/>
            
            <feComposite width="10" height="10"/>
            
            <feTile result="a"/>
            
            <feComposite in="SourceGraphic" in2="a" 
                        operator="in"/>
            
            <feMorphology operator="dilate"
                        radius="5"/>
        </filter>
    </svg>
</div>

<style>
    @keyframes squish{
        0% {width:100%;}
        50% {width:105%;}
        100% {width:100%;}
    }

    @keyframes wavey{
        0%{
            d: path("M 0 128 C 0 128 525.063 160.253 674.949 136.287 C 793.516 117.329 1440 148.379 1440 148.379 L 1440 320 C 1440 320 96 320 48 320 L 0 320 L 0 128 Z");
        }
        25%{
            d: path("M 0 128 C 0 128 463.017 112.001 606.57 141.918 C 700.191 161.429 1440 148.379 1440 148.379 L 1440 320 C 1440 320 96 320 48 320 L 0 320 L 0 128 Z");
        }
        60%{
            d: path("M 0 128 C 0 128 610.409 166.222 754.592 139.505 C 827.297 126.033 1440 148.379 1440 148.379 L 1440 320 C 1440 320 96 320 48 320 L 0 320 L 0 128 Z");
        }
        100%{
            d: path("M 0 128 C 0 128 525.063 160.253 674.949 136.287 C 793.516 117.329 1440 148.379 1440 148.379 L 1440 320 C 1440 320 96 320 48 320 L 0 320 L 0 128 Z");
        }
    }

    @keyframes wavey2{
        0%{
            d: path("M 0 128 C 0 128 531.723 186.552 674.949 136.287 C 786.276 97.217 1440 148.379 1440 148.379 L 1440 320 C 1440 320 96 320 48 320 L 0 320 L 0 128 Z");
        }
        25%{
            d: path("M 0 128 C 0 128 405.317 73.611 547.843 125.829 C 660.779 167.206 1440 148.379 1440 148.379 L 1440 320 C 1440 320 96 320 48 320 L 0 320 L 0 128 Z");
        }
        90%{
            d: path("M 0 128 C 0 128 734.708 233.247 865.608 156.399 C 956.823 102.849 1440 148.379 1440 148.379 L 1440 320 C 1440 320 96 320 48 320 L 0 320 L 0 128 Z");
        }
        100%{
            d: path("M 0 128 C 0 128 531.723 186.552 674.949 136.287 C 786.276 97.217 1440 148.379 1440 148.379 L 1440 320 C 1440 320 96 320 48 320 L 0 320 L 0 128 Z");
        }
    }

    img {
        image-rendering: pixelated;
        image-rendering: -moz-crisp-edges;
        image-rendering: crisp-edges;
    }

    #freakyBtn{
        clip-path: polygon(0 0, 100% 0, 100% 34%, 94% 41%, 100% 48%, 100% 100%, 0 100%, 0 31%, 5% 20%, 0 14%);
        background-color: #5f3a29;
        font-size: 2em;
        height: 3em;
        vertical-align: top;
        border: 0;
        padding: 0.5em 2em 3em 2em;
        transition: 0.5s;
        color: beige;
        border-left: 0.15em solid #8a5b46;
        border-top: 0.15em solid #8a5b46;
        border-right: 0.15em solid #331d13;
        border-bottom: 0.15em solid #331d13;
        background-image: url("/plank.png");
    }

    #freakyBtn:hover{
        background-color: #502d1d;
        cursor: pointer;
    }

    svg{
        animation-name: squish;
        animation-duration: 5s;
        animation-iteration-count: infinite;
    }

    #wave2 path {
        animation-timing-function: ease-out;
        animation-name: wavey2;
        animation-duration: 8s;
        animation-iteration-count: infinite;
    }

    #wave1 path{
        animation-delay: 1s;
        animation-name: wavey;
        animation-duration: 10s;
        animation-iteration-count: infinite;
    }



</style>