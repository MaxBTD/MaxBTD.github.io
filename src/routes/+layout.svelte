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
    <img src="skyBg.png"
    alt="sky"
    id="bgBackground"
    class={darkMode ? "darkMode" : ""}
    style="
        transform: rotate({tweenSpeen.current}deg)
    "/>

    <img src="bg.png"
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
            <button onclick={darkModeFlip}> FLIP TO DARK MODE</button>
            {@render children()}
        </div>
    </div>
</div>

<style>
    :global(body) {
        background-color: #533f38;
    }

    #mainContent {
        background-color: red;
        width:60%;
        margin: 500px auto 0 auto;
        text-align: center;
        height: 1000px;
    }

    #pageNav {
        background-color: beige;
        border: 1px solid black;
        z-index: 1;
    }

    #bgForeground {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 700px;
    }

    #bgBackground {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 700px;
    }

    #pageContent {
        position: absolute;
        z-index: 3;
        background-color: aqua;
        height: 300px;
        width: 58%;
        padding: 10px;
        transform: translateY(-45px);
    }
</style>
