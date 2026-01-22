<script>
    import { bounceOut } from "svelte/easing";
    import { elasticOut } from "svelte/easing";
    import { Tween } from "svelte/motion";
    import { fade } from "svelte/transition";
    import NavBtn from './NavBtn.svelte';
    import { page } from "$app/state";
    import { onMount } from 'svelte';
    import { get } from "svelte/store";
    import { darkOn } from './store.js';
    import { setContext } from "svelte";
	let { children } = $props();
    let pageHeight = $state(1000);
    let pageWidth = $state(1000);
    let viewImageWidth = $state(0);
    let viewImageHeight = $state(0);
    let topMarg = $state(0);
    let mounted = $state(false);

    // menu tabs
    const tabs = [{name: "About", symbol: ""},
                 {name: "Socials", symbol: ""},
                 {name: "Projects", symbol: ""},
                 {name: "Art", symbol: ""}];
    //let darkMode = $state(false);
    let canToggle = $state(true);

    let tweenSpeen = new Tween($darkOn & 1 ? 540 : 0, {
        duration: 2000,
        easing: bounceOut
    });

    function darkModeFlip(){
        console.log("Before - " + $darkOn);
        tweenSpeen.target = $darkOn & 1 ? 0 : 540;
        darkOn.set(~$darkOn);
        console.log("After - " + $darkOn);
    }

    /*
    function toggleDark(bool toOn){
        document.getElementById("bgBackground").classList.toggle("")
    }*/
    
    onMount(() => {
        mounted=true;

        console.log("Dark mode while loading page is: "+($darkOn & 1 ? "enabled!" : "disabled..."));
        const pageContent = document.getElementById("pageContent");
        const viewImage = document.getElementById("imgViewerImg"); 

        const pageObserver = new ResizeObserver((entries) => {
            pageHeight = entries[0].contentRect.height;
            pageWidth = entries[0].contentRect.width;
        });
        pageObserver.observe(pageContent);

        const observer = new MutationObserver((changes) => {
            changes.forEach(change => {
                    if(change.attributeName.includes('src')){
                        viewImageHeight = viewImage.naturalHeight;
                        viewImageWidth = viewImage.naturalWidth;
                    }
                });
        });
        observer.observe(viewImage, {attributes : true});

        // !! NavBtn.svelte content
        let navBtns = document.getElementsByClassName("navBtn");
        for(const element of navBtns){
            break;
        }
    });
    
    function viewerExit(){
        if(mounted){
            document.getElementById("imgViewerImg").style.opacity = "0";
            document.getElementById("imgViewer").style.opacity = "0";
            document.getElementById("imgViewer").style.visibility = "hidden";
        }
    }

    
    
</script>

<div id="imgViewer">
    <button onclick="{viewerExit}" aria-labelledby="."></button>
    <img src="grafic.webp" alt="currentpicture" id="imgViewerImg" style="{viewImageWidth < viewImageHeight ? "height:95%;" : "width:95%;"}"/>
    <p>[ Click off image to close ]</p>
</div>

<div id="mainDiv">
    <!--<audio preload="auto" autoplay="true" loop="true" hidden="true" volume={0.2}>
        <source src="waves.mp3" type="audio/mpeg"> </audio>-->
    <img src="skyBgBig.webp"
    alt="sky"
    id="bgBackground"
    class={$darkOn & 1 ? "darkMode" : ""}
    style="
        transform: rotate({tweenSpeen.current}deg)
    "/>

    <div style=" pointer-events:none;">
        <video autoplay muted loop class="bgForeground" id="dbd" style=" object-fit:fill;
            filter: hue-rotate({tweenSpeen.current/3}deg) brightness({100-(tweenSpeen.current/540)*50}%); width:100%;">
            <source class="bgForeground" src="bg.webm" type="video/mp4">
        </video>
    </div>

    <rect style="
        height: {pageHeight>1000 ? pageHeight+75 : 1000}px;
        filter: hue-rotate({tweenSpeen.current/3}deg) brightness({100-(tweenSpeen.current/540)*50}%);
    ">
<div id="footer">
    <div>Website made by: An absolute amateur.<br/>
        <a href="https://github.com/MaxBTD/MaxBTD.github.io/tree/main" target="_blank">Source Code (pretend it's not a total mess)</a><br/>
        © 2025 MaxBitesTheDust. All rights reserved.
         </div>
</div></rect>

    {#if tweenSpeen.current === 0 || tweenSpeen.current === 540}
    <button id="darkModeToggle"
    onclick={darkModeFlip}
    style="z-index:-2; filter: {$darkOn & 1 ? "saturate(0%) contrast(75%) drop-shadow(0 0 5px #ffffff)" : "none"}" 
    in:fade={{ duration: 2000, delay: 1000}}
    aria-label="toggle dark mode">

    </button>
    {/if}
    <div id="mainContent">
        <nav id="pageNav">
            {#each tabs as tab}
                <NavBtn {tab}/>
            {/each}
        </nav>
        <div id="pageContent" style="filter: drop-shadow(0 0 15px #00000069) {$darkOn & 1 ? "" : "saturate(1.75)"}">
            {@render children()}
        </div>
    </div>
    
</div>



<style>
    rect{
        background-color: #e3d378;
        width: 100%;
        top:1050px;
        left:0;
        position: absolute;
        z-index: -1;

        background-image: url("/plants.webp");
        background-size: 2100px 1200px;
        background-position: -75px 0;
        animation: bgMove 20s ease-in-out infinite;
    }

    @keyframes bgMove{
        0%{
            background-position: -75px 0;
        }
        25%{
            background-position: -137px 10px;
        }
        50%{
            background-position: -75px 0;
        }
        75%{
            background-position: -137px -10px;
        }
        100%{
            background-position: -75px 0;
        }
    }

    :global(html) {
    scroll-behavior: smooth;
    background-color: #75ddec;
    max-width: 100%;
    overflow-x: hidden;
    }

    .darkMode {
        background-color: #5f647f;
    }

    #mainContent {
        width:65%;
        margin: 650px auto 0 auto;
        text-align: center;
    }

    #pageNav {
        z-index: 1;
    }

    .bgForeground {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 1250px;
        overflow: hidden;
        scale: 1.02;
    }

    #bgBackground {
        position: absolute;
        z-index: -3;
        top: -740px;
        left: 0;
        width: 1905px;
        height: 2600px;
    }

    #pageContent {
        position: relative;
        z-index: 3;
        height: fit-content;
        width: 100%;
        transform: translateY(-45px);
        margin: 0 auto;
        background-image: url("/mainPlank.webp");
        background-repeat: repeat;
        
        border: 10px solid #352721;
        border-radius: 1%;
    }

    #darkModeToggle {
        background-color:#ffffff00;
        background-image: url("/darkModeText.webp");
        background-position: 1px 5px;
        border: none;
        width: 245px;
        height: 245px;
        border-radius: 100%;
        cursor:pointer;
        position: absolute;
        left:407px;
        top:59px;
    }

    @media (max-width: 830px) {
        #bgBackground{
            left: -250px;
        }

        #darkModeToggle{
            left: 157px;
        }
    }

    @media (max-width: 1400px) {
        #bgBackground{
            left: -50px;
        }

        #darkModeToggle{
            left: 357px;
        }
    }

    #footer{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 500px;
        z-index: 999;
        background: linear-gradient(to top,
    #000000 5%, #000000cb,#00000041,
    #00000000);
    }

    #footer>div{
        background-color: #000000;
        height: 75px;
        width: 100%;
        position: absolute;
        bottom: -75px;
        color: #5c5c5c;
        text-align: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        user-select: none;
    }

    #footer>div>a{
        color: #5c5c5c;
    }

    #footer>div>a:hover{
        font-weight: bold;
    }

    :global(::-webkit-scrollbar) {
        width: 15px;
    }

    :global(::-webkit-scrollbar-track) {
    background: linear-gradient(to top, #000000, #549aac, #579fb1, #579fb1, #5acbe7, #68dffd);
    }

    :global(::-webkit-scrollbar-thumb) {
    background: #dddddd;
    border-radius: 50dvb;
    }

    :global(::-webkit-scrollbar-thumb:hover) {
    background: #ffffff;
    }
    
    #imgViewer{
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: #0000005F;
        z-index: 999;
        top:0;
        left: 0;
        transition: 0.2s;
        visibility: hidden;
    }

    #imgViewer>img{
        margin:auto;
        display: block;
        transition: 0.25s ease-in-out;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        scale: 1;
    }

    #imgViewer>img:hover{
        scale: 1.005;
    }

    #imgViewer>button{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-color: #00000000;
        border: none;
        transition: 0.2s;
        cursor: pointer;
    }

    #imgViewer>p{
        color: #dbdbdb59;
        position: absolute;
        bottom: 0;
        left: 45.5%;
        user-select: none;
        z-index: -2;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
</style>
