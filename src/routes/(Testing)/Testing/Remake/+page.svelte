<script>
    //math.max
    import { mousePosition } from './store.js';
    import { onMount } from "svelte";
	const coords =  mousePosition();
    
    onMount(()=>{
        waveHeight = (document.getElementById("wave1").getBBox().height)/5;
    });

    $: innerWidth = 0;
    $: innerHeight = 0;
    $: ofsetX = innerWidth/2-$coords.x;
    $: musicPaused = false;
    $: volumeMusic = 0;
    $: waveHeight = 0;
    $: topWave = -3.25;

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
    <h1>{waveHeight}</h1>
    <h1>{$coords.y}</h1>
    <div >
        <img src="/mainPlank.webp" alt="plank" id="target" >
    </div>
    
    <!--Header beach background-->
    <div id="waveDiv" style="height:{waveHeight}em;" >
        <img src="/front.png" alt="beach" style="width: 115%;position:absolute;z-index:2;left:-7.5%;transform: translateX({ofsetX/700}em) translateY({$coords.y/1400}em);"/>
        <div id="wavesBehind" style="height:{waveHeight}em;">
            <svg id="wave0" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" 
            style="top:{topWave}em;transform: translateX({ofsetX/700}em) translateZ(0);">
                <path fill="#1599bd" fill-opacity="1" 
                    d="M 0 128 C 0 128 523.176 130.809 674.949 133.069 C 795.2 134.859 1440 148.379 1440 148.379 L 1440 320 L 0 320 L 0 128 Z">
                </path>
            </svg>
            <svg id="wave1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" 
            style="top:{topWave+1}em;transform: translateX({ofsetX/700}em) translateZ(0);">
                <path fill="#1599ad" fill-opacity="1" 
                    d="M 0 128 C 0 128 524.334 151.915 674.949 133.069 C 794.32 118.133 1440 148.379 1440 148.379 L 1440 320 L 0 320 L 0 128 Z">
                </path>
            </svg>
            <svg id="wave2"  preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" 
            style="top:{topWave+3}em;transform: translateX({ofsetX/200}em) translateZ(0);">
                <path fill="#24a3b5" fill-opacity="1" 
                    d="M 0 128 C 0 128 524.334 151.915 674.949 133.069 C 794.32 118.133 1440 148.379 1440 148.379 L 1440 320 L 0 320 L 0 128 Z">
                </path>
            </svg>
            <svg id="wave3" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" 
            style="top:{topWave+5}em;transform: translateX({ofsetX/50}em) translateZ(0);">
                <path fill="#3cbfd2" fill-opacity="1" 
                    d="M 0 128 C 0 128 524.334 151.915 674.949 133.069 C 794.32 118.133 1440 148.379 1440 148.379 L 1440 320 L 0 320 L 0 128 Z">
                </path>
            </svg>  
        </div>
    </div>


    <!-- PIXEL FILTER - KEEP BOTH -->
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
    <svg style="position:absolute;visibility:hidden;">
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
    #waveDiv{
        max-width:100%;
        width:auto;
        overflow-x:hidden;
        background-color:#ff2929f0;
    }
    #wavesBehind{ 
        display:flex;
        flex-direction: column;
        width:100%;
        position:relative;
        z-index:1;
    }
    #wavesBehind>svg{
        position: absolute;
        filter: url(#pixelate) drop-shadow(1em -2em 1em #00000015);
    }

    @keyframes squish{
        0% {width:100%;}
        50% {width:105%;}
        100% {width:100%;}
    }

    @keyframes wavey{
        0%{
            d: path("M 0 128 C 0 128 525.063 160.253 674.949 136.287 C 793.516 117.329 1440 148.379 1440 148.379 L 1440 320 L 0 320 L 0 128 Z");
        }
        25%{
            d: path("M 0 128 C 0 128 463.017 112.001 606.57 141.918 C 700.191 161.429 1440 148.379 1440 148.379 L 1440 320 L 0 320 L 0 128 Z");
        }
        60%{
            d: path("M 0 128 C 0 128 610.409 166.222 754.592 139.505 C 827.297 126.033 1440 148.379 1440 148.379 L 1440 320 L 0 320 L 0 128 Z");
        }
        100%{
            d: path("M 0 128 C 0 128 525.063 160.253 674.949 136.287 C 793.516 117.329 1440 148.379 1440 148.379 L 1440 320 L 0 320 L 0 128 Z");
        }
    }

    @keyframes wavey2{
        0%{
            d: path("M 0 128 C 0 128 531.723 186.552 674.949 136.287 C 786.276 97.217 1440 148.379 1440 148.379 L 1440 320 L 0 320 L 0 128 Z");
        }
        25%{
            d: path("M 0 128 C 0 128 405.317 73.611 547.843 125.829 C 660.779 167.206 1440 148.379 1440 148.379 L 1440 3200 L 0 320 L 0 128 Z");
        }
        75%{
            d: path("M 0 128 C 0 128 734.708 233.247 865.608 156.399 C 956.823 102.849 1440 148.379 1440 148.379 L 1440 320 L 0 320 L 0 128 Z");
        }
        100%{
            d: path("M 0 128 C 0 128 531.723 186.552 674.949 136.287 C 786.276 97.217 1440 148.379 1440 148.379 L 1440 320 L 0 320 L 0 128 Z");
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
        animation-duration: 15s;
        animation-iteration-count: infinite;
        animation-timing-function: cubic-bezier(0.15, 0.32, 0.55, 1.35);
    }

    #wave2 path {
        animation-timing-function: cubic-bezier(0.15, 0.32, 0.55, 1.35);
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