
<script>
    import { elasticOut } from "svelte/easing";
    import { Tween } from "svelte/motion";
    let { tab } = $props();

    let btnTween = new Tween(0, {
        duration: 2000,
        easing: elasticOut
    });

    function btnPopUp(d){
        btnTween.target = d;
        console.log(btnTween.current);
    }

</script>

<a href='/{tab === 'Main' ? '' : tab}' class="navBtn" onmouseenter={() => btnPopUp(25)} onmouseleave={() => btnPopUp(0)} style="transform:translateY(-{btnTween.current}px)">{tab}</a>

<style>
    .navBtn {
        border: 1px solid black;
        padding: 5px 75px 50px 75px;
        font-size: 35px;
        margin: 0 10px;
        background-color: brown;
        display: inline-block;
        text-decoration: none;
        color:white;
        width: 100px;
        font-family: "Aubrey", system-ui;
        font-style:normal;
    }
</style>