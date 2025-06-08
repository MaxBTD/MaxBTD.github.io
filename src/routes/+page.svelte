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
                <sub>[mainly twitter, as I use it the most]</sub>
            </p>
        </div>
        <div id="disclaimerImgDiv" style="width: 29%; float:right;">
            <img src="builderMax.gif" alt="builder Max gif" id="builderMax"/>
        </div>
    </div>
</div>
<div class="textBehind" style="margin: -117px 0 100px 0;">
<p>but sadly I then dropped the hot dog onto the ground, splashing the sauces<br/>
    everywhere. Luckily, I was still able to survive, but fell into great grieving<br/>
     and had to cut ties with the monks, fast foward few months and now im here.
</p>
</div>
<div class="mainText" style="margin-bottom: 75px;">
    <h2>Graphic Design Expertise</h2>
    <hr class="mainHR"/>
    <p style="margin-bottom:-100px;">Here's one of my most recent pieces</p>
    <img src="grafic.webp" alt="graficeDeign" id="loberGraphic" style="z-index: 0;"/>
    <sub style="z-index: -1;"><a id="loberCredit" href="https://fishing.tas.gov.au/species/rock-lobster-southern" target="_blank">[ Lobster Graphic Credit ]</a></sub>
</div>

<style>
    #disclaimer {
        width: 101.5%;
        background-image: url("smolCaution.png");
        height: 485px;
        margin: 300px auto 100px auto;
        position: relative;
        left: -0.75%;
        animation: slide 2s linear infinite;
        z-index: 0;

        filter: drop-shadow(0 5px 10px black);
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
        background-image: url("mainPlank.png");
        user-select: none;
    }

    .title>h1{
        display: block;
        vertical-align:middle;
        display: table-cell;
        font-size: 125px;
        transform: scaley(0.9) scalex(1.5);
        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

        background: -webkit-linear-gradient(#686868, #eee, #686868);
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
</style>