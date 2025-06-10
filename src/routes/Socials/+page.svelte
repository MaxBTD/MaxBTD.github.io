<script>
    import { inview } from "svelte-inview";

    let visible = $state(false);

    function smth(){
        console.log("boooba");
    }
</script>

<div class="title" style="z-index: 6;">
    <h1>SOCIALS</h1>
</div>
<div id="socialsPage">
    <div class="socialBoard" style="z-index: 5;">
        <a href="https://www.youtube.com/@MaxBitesTheDust" target="_blank">
            <div><img src="Youtube.svg" alt="YT"/>
            <h3>Youtube</h3></div>
            
        </a>    
        
    </div>
    <div class="socialBoard" style="z-index: 4;">
        <a href="https://x.com/MaxBitesTheDust" target="_blank">
            <div><img src="Twitter.svg" alt="TWT"/>
            <h3>Twitter</h3></div>
            
        </a>
    </div>
    <div class="socialBoard" style="z-index: 3;">
        <a href="https://www.twitch.tv/maxbitesthedust" target="_blank">
            <div><img src="Twitch.svg" alt="TWCH"/>
            <h3>Twitch</h3></div>
            
        </a>
    </div>
    <div class="socialBoard" style="z-index: 2;">
        <a href="https://bsky.app/profile/maxbitesthedust.bsky.social" target="_blank">
            <div><img src="Bluesky.svg" alt="BS"/>
            <h3>Bluesky</h3></div>
            
        </a>
    </div>
    <div class="socialBoard" style="z-index: 1;">
        <a href="https://www.planetminecraft.com/member/maxbtd/" target="_blank">
            <div><img src="Planet Minecraft.svg" alt="PM"/>
            <h3>Planet Minecraft</h3></div>
            
        </a>
    </div>
    <div class="socialBoard" style="z-index: 0;">
        <a href="https://artfight.net/~MaxBTD" target="_blank">
            <div><img src="ArtFight.png" alt="AF"/>
            <h3>ArtFight</h3></div>
            
        </a>
    </div>

    <h3>[ More coming soon... probably... ]</h3>
</div>

<style>
    .socialBoard{
        background-image: url("/socialCube.webp");
        filter: brightness(80%) drop-shadow(5px 5px 10px #0000008f);
        width: 350px;
        margin: -20px 25px 0 25px;
        float: left;
        padding-top: 100px;
        padding-bottom: 25px;
        height: 250px;
        text-align: center;
        position: relative;
    }

    .socialBoard > a {
        text-decoration: none;
        filter: brightness(130%);
        color: white;
        font-size: 35px;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    img {
        height: 150px;
    }

    #socialsPage::after{
        padding-bottom: 75px;
        content: "";
        display: table;
        clear: both;
    }

    #socialsPage > h3{
        color: #ffffff90;
        clear: both;
        position: relative;
        top: 80px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

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
        background-image: url("/mainPlank.png");
        user-select: none;
    }

    .title>h1{
        display: block;
        display: table-cell;
        font-size: 125px;
        transform: scaley(0.9) scalex(1.5);
        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

        background: -webkit-linear-gradient(#686868, #eee, #686868);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .socialBoard:hover{
        animation: jumpUp 0.25s ease-in-out;
        top:-10px
    }

    @keyframes jumpUp{
        0%{
            top:0px
        }
        100%{
            top:-10px
        }
    }
</style>