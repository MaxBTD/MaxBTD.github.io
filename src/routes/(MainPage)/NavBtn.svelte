<script>
    import { elasticOut } from "svelte/easing";
    import { Tween } from "svelte/motion";
    import { darkOn } from './store.js';
    let { tab } = $props();

    let btnTween = new Tween(0, {
        duration: 2000,
        easing: elasticOut
    });

    function btnPopUp(d){
        btnTween.target = d;
    }
</script>

<a href='/{tab.name === 'About' ? '' : tab.name}' 
    class="navBtn"
    onmouseenter={() => btnPopUp(25)} 
    onmouseleave={() => btnPopUp(0)} 
    style="transform:translateY(-{btnTween.current}px);
        filter: drop-shadow(10px 10px 5px #0000004b) {$darkOn & 1 ? "" : "saturate(1.75)"};"
        data-sveltekit-preload-data="hover">
    {tab.name}
</a>

<style>
    .navBtn {
        padding: 5px 65px 50px 65px;
        font-size: 55px;
        margin: 0 10px;
        display: inline-block;
        text-decoration: none;
        color:#f3e8e0;
        width: 145px;
        font-family: "Aubrey", system-ui;
        font-style: normal;
        text-align: center;
        background-image: url("/btnWood.webp");
        background-position: center;
        background-size: cover;
        letter-spacing: -2px;
    }

    @media (max-width: 1700px) {
        .navBtn{
            padding: 5px 20px 50px 20px;
        }
    }

    @media (max-width: 1250px) {
        .navBtn{
            padding: 5px 0 50px 0;
        }
    }
</style>