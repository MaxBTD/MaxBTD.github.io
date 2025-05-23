<script>
    import { bounceOut } from "svelte/easing";
    import { elasticOut } from "svelte/easing";
    import { Tween } from "svelte/motion";
    import NavBtn from './NavBtn.svelte';
	let { children } = $props();

    const tabs = ["Main", "Socials", "Projects", "Art"];
    let darkMode = $state(false);

    

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

    <div id="mainContent">
        <nav id="pageNav">
            {#each tabs as tab}
                <NavBtn {tab}/>
            {/each}
        </nav>
        <div id="pageContent">
            <button onclick={darkModeFlip} disabled={tweenSpeen.current === 0 || tweenSpeen.current === 540 ? false : true}> FLIP TO DARK MODE</button>
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
        filter: saturate(1.75) drop-shadow(0 0 15px #00000069);
        border: 10px solid #352721;
        border-radius: 1%;
    }
</style>
