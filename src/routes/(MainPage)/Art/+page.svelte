<script>
    import ArtFrame from "./artFrame.svelte";

    const artWork = [{art:"/splitDaFoe.webp", widthPerc:65},
                     {art:"/SECTORFnoText.webp", widthPerc:18},
                     {art:"/artfightSubmission.webp", widthPerc:25}
    ];
</script>


<div class="title">
                <h1>ART</h1>
            </div>
<div class="mainArtContent">
    {#each artWork as artWork}
        <ArtFrame art={artWork.art} widthPerc={artWork.widthPerc}/> 
        {#if artWork.widthPerc>60}
            <br/>
        {/if}
    {/each}
    

    <h3>[ More coming soon... ]</h3>
</div>



<style>
    .title{
        width: 100%;
        height: 135px;
        display: table;
        margin: 0;
        border: 10px solid #352721;
        position: relative;
        left: -10px;
        top:-10px;
        border-radius: 1cap;
        filter: drop-shadow(0 10px 10px #00000085) brightness(0.9) saturate(0.9);
        background-image: url("/mainPlank.webp");
        user-select: none;
    }
    .title>h1{
        display: block;
        display: table-cell;
        font-size: 125px;
        transform: scaley(0.9) scalex(1.5);
        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

        background: -webkit-linear-gradient(#686868, #eee, #686868);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .mainArtContent{
        margin: 50px 0;
    }

    .mainArtContent>h3{
        color: #ffffff90;
        clear: both;
        position: relative;
        margin-top: 50px;
        top: 40px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        user-select: none;
    }
        
</style>