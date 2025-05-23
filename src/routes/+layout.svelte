<script>
    import { bounceOut } from "svelte/easing";
    import { elasticOut } from "svelte/easing";
    import { Tween } from "svelte/motion";
    import { fade } from "svelte/transition";
    import NavBtn from './NavBtn.svelte';
	let { children } = $props();

    const tabs = ["Main", "Socials", "Projects", "Art"];
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
</script>

<div id="mainDiv">
    <img src="skyBgBig.png"
    alt="sky"
    id="bgBackground"
    class={darkMode ? "darkMode" : ""}
    style="
        transform: rotate({tweenSpeen.current}deg)
    "/>

    <img src="bg.gif"
    alt="beach"
    id="bgForeground"
    style="
        filter: hue-rotate({tweenSpeen.current/3}deg) brightness({100-(tweenSpeen.current/540)*50}%);
    "/>

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
    .darkMode {
        background-color: #5f647f;
    }

    #mainContent {
        width:65%;
        margin: 650px auto 0 auto;
        text-align: center;
        height: 1000px;
    }

    #pageNav {
        z-index: 1;
    }

    #bgForeground {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 1250px;
    }

    #bgBackground {
        position: absolute;
        z-index: -1;
        top: -740px;
        left: 0;
        width: 100%;
        height: 2600px;
    }

    #pageContent {
        position: relative;
        z-index: 3;
        height: 1500px;
        width: 98%;
        padding: 10px;
        transform: translateY(-45px);
        margin: 0 auto;
        background-image: url("mainPlank.png");
        background-repeat: repeat-y;
        border: 10px solid #352721;
        border-radius: 1%;
    }

    #darkModeToggle {
        background-color:#ffffff00;
        background-image: url("darkModeText.png");
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
</style>
