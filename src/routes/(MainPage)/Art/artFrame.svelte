<script>
    import { onMount } from "svelte";
    let {art, widthPerc} = $props();
    let mounted = $state(false);
    let heightFrame = $state(0);

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

    // random frames

</script>

<!-- Set up art aligment later -->
<div class="artSize">
    <button class="artPicture" onclick="{() => {artOpen(art)}}" style="width: {widthPerc}%;">
        <img src="/frame.webp" alt="frame" class="artFrame" style="height: {heightFrame}px; margin-bottom: -{heightFrame}px; width: 105%"/>
        <img src={art} alt="{art}" class="artPiece" bind:offsetHeight={heightFrame} style="width: 100%;"/>
    </button>
</div>

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
        position: relative;
    }

    .artPiece{
        max-height: 600px;
        height:100%;
        width: auto;
    }
</style>