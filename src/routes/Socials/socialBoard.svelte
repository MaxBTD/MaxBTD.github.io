<script>
    let { platform, index, alt, link } = $props();
</script>

<div class="socialBoard" style="z-index: {index};">
        <a href="{link}" target="_blank">
            <div><img src="{platform}.webp" alt="{alt}"/>
            <h3>{platform}</h3></div>
        </a>    
</div>


<style>
    .socialBoard{
        background-image: url("/socialCube1.webp");
        filter: drop-shadow(5px 5px 10px #0000008f);
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
        color: white;
        font-size: 35px;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    img {
        height: 150px;
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