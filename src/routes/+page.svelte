<script>
    import { onMount } from 'svelte';
    let mounted = $state(false);

    onMount(() =>{
        mounted = true;
    });

    function bushClicked(){
        if(mounted){
            document.getElementById("maxBehindBush").src = "behindBush.webp";
        }
    }
</script>

<div class="title">
                <h1>ABOUT</h1>
            </div>
<div class="textBehind" style="margin-bottom: -325px;">
    <h1>Welcome to the worlds shittiest website!</h1>
    <hr class="mainHR"/>
    <p>	Hello, my name is Max, and here is the story of my entire life.<br/>
At the beginning, I was born at a very young age, the first few months of my life <br/>
were very hard for me. I couldn't talk, walk or play video games. <br/>
I didn't even have teeth. But the very worst thing of it all,<br/>
was that I couldn't drink alcohol. <br/>
You're not supposed to see this part. please leave
    </p>
</div>
<div id="disclaimer">
    <img src="buisness.webp" alt="busionse" id="theBus"/>
    <div style="height:385px; margin-top:32px; width:100%; float:left; background-color:#f0ce0e;">
        <div id="disclaimerTextDiv">
            <h1>This Website is still under construction!</h1>
            <p>Please keep in mind, that this is still an early version of my website. <br/>
                Everything including: composition, layout and even the entire theme - are subject to change! <br/>
                This is <b>TOTALLY NOT</b> an excuse, that I can use in defence of my spaghetti code<br/>
                and/or unhealthy amounts of laziness I possess.<br/><br/>
                If you have any feedback, <br/> Don't be afraid to message me on any of my <a href="/Socials">SOCIALS!</a><br/>
                <sub>[mainly twitter or spacehey, as I use them the most]</sub>
            </p>
        </div>
        <div id="disclaimerImgDiv" style="width: 29%; float:right;">
            <img src="builderMax.webp" alt="builder Max gif" id="builderMax"/>
        </div>
    </div>
</div>
<div class="textBehind" style="margin: -117px 0 100px 0;">
<p>but sadly I then dropped the hot dog onto the ground, splashing the sauces<br/>
    everywhere. Luckily, I was still able to survive, but fell into great grieving<br/>
     and had to cut ties with the monks, fast foward few months and now im here.
</p>
</div>
<div class="mainText" style="margin-bottom: 115px;">
    <h2>Graphic Design Expertise</h2>
    <hr class="mainHR"/>
    <p style="margin-bottom:-100px;">Here's one of my most recent pieces</p>
    <img src="grafic.webp" alt="graficeDeign" id="loberGraphic" style="z-index: 0;"/>
    <img src="lights.webp" alt="theatre lights" id="lightsLober" style="z-index: 1;"/>
    <sub ><a id="loberCredit" 
        href="https://fishing.tas.gov.au/species/rock-lobster-southern"
        target="_blank" 
        style="z-index: 3; position:relative; width:fit-content; margin:0 auto;">[ Lobster Graphic Credit ]</a></sub>
</div>
<div class="mainText" style="margin-bottom: 200px;">
    <h2>Latest Youtube Video</h2>
    <hr class="mainHR"/>
    <div style="width: 100%; position:absolute; top:150px">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Animated-Flag-Poland.gif" alt="polishFlag" style="float: left;"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Animated-Flag-Poland.gif" alt="polishFlag" style="float: right;"/>
    </div>
    <iframe style="border-radius:1cap;" width="600" height="340" src="https://www.youtube.com/embed?listType=playlist&list=UU5BIhkDIJcQXzjGAezS1JGA" frameborder="0" allowfullscreen title="Latest Video"></iframe>
    
</div>
<div>
    <img src="bush.webp" alt="bushWITHNOMAXDONTCHECK" width="150" height="500" style="bottom:0; margin:-80px 0;  z-index:0; position:absolute; left:0; filter:drop-shadow(5px 5px 10px #121212);"/>
    <img src="bush.webp" alt="bushWITHNOMAXDONTCHECK" width="300" height="200" style="bottom:0; margin:0;  z-index:0; position:absolute; left:125px; filter:drop-shadow(5px 5px 10px #121212);"/>
    <img src="bush.webp" alt="bushWITHNOMAXDONTCHECK" width="150" height="500" style="bottom:0; margin:-80px 0;  z-index:0; position:absolute; right:150px; filter:drop-shadow(5px 5px 10px #121212);"/>
    <img src="bush.webp" alt="bushWITHNOMAXDONTCHECK" width="150" height="500" style="bottom:0; margin:-80px 0;  z-index:0; position:absolute; right:0; filter:drop-shadow(5px 5px 10px #121212);"/>
    <div style="filter:drop-shadow(5px 5px 15px black);">
        <button style="background-color:transparent; border:none; cursor:pointer; position: absolute; filter:saturate(0.6); z-index:1; margin:-10px 0 25px 40px; opacity:0%;" onclick={bushClicked} class="bushAnimation">
        <img src="behindBush.webp" alt="bushLober" id="maxBehindBush"/>
        </button>
        <img src="bush.webp" alt="bushWITHNOMAXDONTCHECK" width="350" style="margin:-80px 0;  z-index:0; position:relative;"/>
    </div>
</div>


<style>
    #disclaimer {
        
        width: 101.5%;
        background-image: url("/smolCaution.webp");
        height: 485px;
        margin: 300px auto 100px auto;
        position: relative;
        left: -0.75%;
        animation: slide 2s linear infinite;
        z-index: 0;

        filter: drop-shadow(0 5px 10px #000000);
    }

    #builderMax {
        filter: saturate(0.6) drop-shadow(5px 5px 10px black);
        float:right;
        position: relative;
        top: -150px;
        left: 10px;
    }

    @keyframes slide{
        0% {
            background-position: 0;
        }
        100% {
            background-position: -470px;
        }
    }

    #disclaimerTextDiv{
        width: 70%;
        float:left;

        font-size: 22px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        letter-spacing: -1.5px;
        word-spacing: 2px;
        user-select: none;
        padding-left: 50px;
        box-sizing: border-box;
    }

    #disclaimerTextDiv a{
        color: black;
        font-weight: bold;
        transition: top 2s;
    }

    #disclaimerTextDiv a:hover{
        position: relative;
        color: #ffffff;
        text-shadow: 2px 3px 0 black;
    }

    #disclaimerTextDiv sub{
        color: #31313194;    
        top:-17px;
        position: relative;
    }

    #theBus{
        position: relative;
        width: 75%;
        height: 200px;
        z-index: 2;
        margin-bottom:-190px;
        bottom: 165px;
        right: 120px;
        
    }

    .textBehind {
        color: white;
        font-size: 30px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        z-index: -2;
        position: relative;
        letter-spacing: -1px;
        filter: drop-shadow(2px 2px 5px black);
        user-select: none;
    }

    .textBehind p {
        font-size: 32px;
        font-weight: bold;

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

    #loberGraphic{
        margin-bottom: -140px;
    }

    #loberCredit{
        clear: both;
        width: 100%;
        text-align: center;
        display: block;
        text-decoration: none;
        color: #ffffff90;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        transition: 0.2s;
    }

    .mainHR{
        border-top:10px solid white; 
        width:60%; 
        margin-top:-35px;
    }

    .mainText{
        color: white;
        font-size: 30px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        filter: drop-shadow(2px 2px 5px black);
        user-select: none;
    }

    .mainText p{
        font-weight: bold;
    }

    .mainText sub{
        font-size: small;
    }

    .mainText a:hover{
        font-weight: bold;
    }

    #lightsLober{
        position: absolute;
        left: -30px;
        top: 275px;
    }

    .bushAnimation{
    }

    @keyframes popUp{
        0% {
            opacity: 0%;
            margin-top: -10px;
            z-index: -1;
        }
        4%{
            opacity: 0%;
        }
        6%{
            opacity:100%;
        }
        17%{
            margin-top: -150px;
        }
        98%{
            margin-top: -150px;
            opacity: 100%;
            z-index: -1;
        }
        100%{
            margin-top: -10px;
            opacity: 0%;
            z-index: -1;
        }

    }

    .bushAnimation:focus {
            animation: popUp 8.5s ease-in-out backwards;
    }
    .bushAnimation:active {
            animation: none;
    }
</style>