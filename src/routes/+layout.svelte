<script>
    import { bounceOut } from "svelte/easing";
    import { elasticOut } from "svelte/easing";
    import { Tween } from "svelte/motion";
    import { fade } from "svelte/transition";
    import NavBtn from './NavBtn.svelte';
    import { page } from "$app/state";
    import { onMount } from 'svelte';
	let { children } = $props();
    let pageHeight = $state(1000);
    let mounted = $state(false);

    const tabs = ["About", "Socials", "Projects", "Art"];
    let darkMode = $state(false);
    let canToggle = $state(true);

    let tweenSpeen = new Tween(0, {
        duration: 2000,
        easing: bounceOut

    });

    function darkModeFlip(){
        darkMode = !darkMode;
        tweenSpeen.target = tweenSpeen.current === 0 ? 540 : 0;
    }
    
    onMount(() => {
        mounted=true;
        const pageContent = document.getElementById("pageContent");

        const observer = new ResizeObserver((entries) => {
        pageHeight = entries[0].contentRect.height;
        });

        observer.observe(pageContent);
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
    <button onclick="{viewerExit}"></button>
    <img src="grafic.webp" alt="currentpicture" id="imgViewerImg"/>
    <p>[ Click off image to close ]</p>
</div>

<div id="mainDiv">
    <!--<audio preload="auto" autoplay="true" loop="true" hidden="true" volume={0.2}>
        <source src="waves.mp3" type="audio/mpeg"> </audio>-->
    <img src="skyBgBig.webp"
    alt="sky"
    id="bgBackground"
    class={darkMode ? "darkMode" : ""}
    style="
        transform: rotate({tweenSpeen.current}deg)
    "/>

    <video autoplay muted loop class="bgForeground" style="
        filter: hue-rotate({tweenSpeen.current/3}deg) brightness({100-(tweenSpeen.current/540)*50}%); ">
        <source class="bgForeground" src="bg.webm" type="video/mp4">
    </video>

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

    {#if tweenSpeen.current === 0 || tweenSpeen.current === 540 ? true : false}
    <button id="darkModeToggle"
    onclick={darkModeFlip}
    style="filter: {darkMode ? "saturate(0%) contrast(75%) drop-shadow(0 0 5px #ffffff)" : "none"}" 
    in:fade={{ duration: 2000, delay: 1000}}
    aria-label="toggle dark mode">

    </button>
    {/if}
    <div id="mainContent">
        <nav id="pageNav">
            {#each tabs as tab}
                <NavBtn {tab} {darkMode}/>
            {/each}
        </nav>
        <div id="pageContent" style="filter: drop-shadow(0 0 15px #00000069) {darkMode ? "" : "saturate(1.75)"}">
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
        z-index: -1;
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
        scale: 1.05;
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
