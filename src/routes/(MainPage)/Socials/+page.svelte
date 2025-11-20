<script>
    import { inview } from "svelte-inview";
    import SocialBoard from "./socialBoard.svelte";
    
    const socials = [{platform:"Youtube", index:6, alt:"YT", link:"https://www.youtube.com/@MaxBitesTheDust"},
                     {platform:"Twitter", index:5, alt:"TWT", link:"https://x.com/MaxBitesTheDust"},
                     {platform:"SpaceHey", index:4, alt:"SH", link:"https://spacehey.com/maxbtd"},
                     {platform:"Twitch", index:3, alt:"TWCH", link:"https://www.twitch.tv/maxbitesthedust"},
                     {platform:"Bluesky", index:2, alt:"BS", link:"https://bsky.app/profile/maxbitesthedust.bsky.social"},
                     {platform:"Planet Minecraft", index:1, alt:"PM", link:"https://www.planetminecraft.com/member/maxbtd/"},
                     {platform:"ArtFight", index:0, alt:"AF", link:"https://artfight.net/~MaxBTD"}];

    let visible = $state(false);

    function smth(){
        console.log("boooba");
    }
</script>

<div class="title" style="z-index: 6;">
    <h1>SOCIALS</h1>
</div>
<div id="socialsPage">
    {#each socials as socials}
        <SocialBoard platform={socials.platform} index={socials.index} alt={socials.alt} link={socials.link}/>
    {/each}

    <h3>[ More coming soon... probably... ]</h3>
</div>

<style>
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
        user-select: none;
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

</style>