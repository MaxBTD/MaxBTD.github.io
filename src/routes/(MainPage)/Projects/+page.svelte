<div class="title">
                <h1>PROJECTS</h1>
            </div>
<div id="disclaimer">
    <div style="height:100px; margin-top:38px; width:100%; float:left; background-color:#f0ce0e;">
        <div id="disclaimerTextDiv">
            <h1>[ Subpage not ready... ]</h1>
        </div>
    </div>
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

    #disclaimer {
        
        width: 101.5%;
        background-image: url("/smolCaution.webp");
        height: 175px;
        margin: 15px auto 25px auto;
        position: relative;
        left: -0.75%;
        animation: slide 5s linear infinite;
        z-index: 0;

        filter: drop-shadow(0 5px 10px #000000);
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
        text-align: center;
        font-size: 22px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        letter-spacing: -1.5px;
        word-spacing: 2px;
        user-select: none;
        margin-top: -13px;

        box-sizing: border-box;
    }
</style>