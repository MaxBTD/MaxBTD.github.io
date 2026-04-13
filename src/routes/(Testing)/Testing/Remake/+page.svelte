<script>
    //math.max
    import { mousePosition } from './store.js';
    import { onMount } from "svelte";
	const coords =  mousePosition();
    
    onMount(()=>{
        waveHeight = (document.getElementById("wave1").getBBox().height)/5;
        treeHeight = (document.getElementsByClassName("treeSvg")[0].getBBox().height);
    });

    $: innerWidth = 0;
    $: innerHeight = 0;
    $: ofsetX = innerWidth/2-$coords.x;
    $: musicPaused = false;
    $: volumeMusic = 0;
    $: waveHeight = 0;
    $: topWave = -7.5+(1500/innerWidth);
    $: treeHeight = 0;

    function audioSwitch(){
        var music = document.getElementById("ambientMusic");
        !musicPaused ? music.pause() : music.play();
    }
</script>

    <svelte:window bind:innerWidth bind:innerHeight/>

<div id="mainDiv">
    <audio preload="auto" autoplay="true" loop="true" hidden="true" volume={volumeMusic/100} id="ambientMusic" bind:paused={musicPaused}>
        <source src="/chillSong.wav" type="audio/mpeg"> </audio>

    <button id="freakyBtn">{innerWidth/2}</button>
    <button onclick={()=>{audioSwitch()}}><img id="offOnSwitch" src={musicPaused ? "/off.png" : "/on.png"} alt="ON" style="width:5em;"/></button>
    <input type="range" id="volume" name="volume" min="0" max="100" step="1" bind:value={volumeMusic}/>
    <h1>waveHeight: {waveHeight}</h1>
    <h1>$coords.y: {$coords.y}</h1>
    <h1>topWave: {topWave}</h1>
    <!--    
    <div >
        <img src="/mainPlank.webp" alt="plank" id="target" >
    </div>
    -->

    <!--Header beach background-->
    <div id="waveDiv" style="height:{waveHeight*1.5}em;" >
        <div id="treesFront" style="height:{treeHeight}em;">
            <svg class="treeSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 245"
            style="position:absolute;filter:url(#pixelate);left:-5%">
                <defs>
                    <radialGradient id="treeGrad" x1="0%" x2="100%" y1="0%" y2="100%" fx="85%" fy="70%" cy="70%">
                        <stop offset="0%" stop-color="#3b2a23" />
                        <stop offset="100%" stop-color="#694b3f" />
                    </radialGradient>
                </defs>
                <use href="#defaultTree" fill="url(#treeGrad)" />
<!--            <path style="fill: url(#treeGrad);" d="M 27.28 200.658 C 27.28 200.658 63.647 92.134 64.215 92.703 C 64.783 93.272 134.102 0.088 134.102 0.088 L 159.67 14.861 C 159.67 14.861 104.556 104.066 103.988 104.066 C 103.42 104.066 93.192 133.612 93.192 133.612 C 93.192 133.612 144.897 220.544 144.329 220.544 C 143.761 220.544 93.761 197.817 93.761 197.817 C 93.761 197.817 73.306 244.408 73.874 244.408 C 74.442 244.408 43.19 204.635 42.62 204.635 C 42.06 204.635 0.01 217.135 0.01 217.135 L 27.28 200.658 Z"></path>-->
            </svg>
            <svg class="treeSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 245"
            style="position:absolute;filter:url(#pixelate);right:0;transform-style: preserve-3d;transform:rotateY(180deg);">
                <defs>
                    <radialGradient id="treeGrad" x1="0%" x2="100%" y1="0%" y2="100%" fx="85%" fy="70%" cy="70%">
                        <stop offset="0%" stop-color="#3b2a23" />
                        <stop offset="100%" stop-color="#694b3f" />
                    </radialGradient>
                </defs>
                <use href="#defaultTree" fill="url(#treeGrad)" />
            </svg>
        </div>
        <img src="/front.png" alt="beach" style="width: 105%;position:absolute;z-index:2;left:-3%;transform: translateX({ofsetX/700}em) translateY({$coords.y/1400}em);"/>
        <div id="wavesBehind" style="height:{waveHeight}em;">
            <svg id="wave1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 170" 
            style="transform: translateX({ofsetX/700}em) translateZ(0);">
                <use href="#defaultWave" fill="#00667d" />
            </svg>
            <svg id="wave2"  preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" 
            style="top:2em;transform: translateX({ofsetX/450}em) translateZ(0);">
                <use href="#defaultWave" fill="#008fb4" />
            </svg>

            <svg id="wave3" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" 
            style="top:7em;transform: translateX({ofsetX/200}em) translateZ(0);">
                <use href="#defaultWave" fill="#00a8d5" />
            </svg>
            <svg id="wave4"  preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" 
            style="top:12em;transform: translateX({ofsetX/100}em) translateZ(0);">
                <use href="#defaultWave" fill="#1fc0da" />
            </svg>
        </div>
    </div>

    <!-- PIXEL FILTER - KEEP BOTH -->
    <svg class="svgTemplate">
        <filter id="pixelate" x="0" y="0">
            <feFlood x="4" y="4" height="1" width="1" result="flood"></feFlood>
            <feComposite width="4" height="4" in="flood" result="composite"></feComposite>
            <feTile in="composite" result="tiled"></feTile>
            <feComposite in="SourceGraphic" in2="tiled" operator="in"></feComposite>
            <feComponentTransfer> <feFuncA type="discrete" tableValues="0 1" /> </feComponentTransfer>
            <feMorphology operator="dilate" radius="2" result="final"></feMorphology>
            
        </filter>
    </svg>
    <svg class="svgTemplate">
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
    <svg class="svgTemplate">
        <path id="defaultWave"  fill-opacity="1" 
            d="M 0 0 C 0 0 524 22 675 4 C 794 -10 1440 20 1440 20 L 1440 170 L 0 170 L 0 0 Z">
        </path>
        <path id="defaultTree" fill-opacity="1"
            d="M 27 201 C 27 201 64 92 64 93 C 65 93 134 0 134 0 L 160 15 C 160 15 105 104 104 104 C 103 104 93 134 93 134 C 93 134 145 221 144 221 C 144 221 94 198 94 198 C 94 198 73 244 74 244 C 74 244 43 205 43 205 C 42 205 0 217 0 217 L 27 201 Z">
        </path>
    </svg>
</div>

<style>
    :global(body){
        background: linear-gradient(
            180deg,
            #84e6ff 30%,
            #e2d074 30% 100% 
        );
        background-repeat: no-repeat;
        background-size: cover;
        margin: 0 auto;
        padding-bottom: 100em;
    }

    #treesFront{
        z-index: 3;
        width: 25%;
        position: absolute;
        top:-3%;
    }

    .svgTemplate{
        position:absolute;
        visibility:hidden;
    }

    #waveDiv{
        margin-top: 15em;


        max-width:100%;
        width:auto;
        position:relative;
    }
    #wavesBehind{ 
        display:flex;
        flex-direction: column;
        width:100%;
        position:absolute;
        z-index:1;
        top:15px;
    }
    #wavesBehind>svg{
        position: absolute;
        filter: url(#pixelate) drop-shadow(1em -2em 1em #00000015);
        min-width: 1080px;
    }

    @keyframes squish{
        0% {width:100%;}
        50% {width:105%;}
        100% {width:100%;}
    }
/*
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
    }*/

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