<script>
    import { onMount } from "svelte";
    let mounted = $state(false);

    onMount(() => {
        mounted = true;
    });

    function artOpen(artSrc){
        if(mounted){
            document.getElementById("imgViewer").style.visibility = "visible";
            document.getElementById("imgViewerImg").src = artSrc;
            document.getElementById("imgViewer").style.opacity = "1";
            document.getElementById("imgViewerImg").style.opacity = "1";
        }
    }
</script>

<button class="artPicture" onclick="{() => {artOpen("/splitDaFoe.webp")}}">
    <img src="/frame.webp" alt="frame" class="artFrame"/>
    <img src="/splitDaFoe.webp" alt="art" class="artPiece"/>
</button>

<style>
    .artPicture{
        background-color: #00000000;
        border:none;
        cursor: pointer;
        transition: 0.2s;
        filter: saturate(0.6) drop-shadow(5px 5px 10px #000000);
    }

    .artPicture:hover{
        scale: 1.05;
    }

    .artFrame{
        position: absolute;
        margin-left: -60px;

        height: 210px;
        width: 75%;
    }

    .artPiece{
        width: 65%;
    }
</style>