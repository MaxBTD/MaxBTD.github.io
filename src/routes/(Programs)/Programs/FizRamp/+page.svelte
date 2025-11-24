<script>
    let offset = $state(0);
    let degree = $state(0);

    function popchnijBlok(){
        let kat = document.getElementById("fizRampK").value;
        let tarcie = document.getElementById("fizRampT").value;
        let predkosc = document.getElementById("fizRampV").value;

        degree = -kat;



        return 0;
    }


</script>
<div id="mainDiv">
    <input type="number" id="fizRampK"/><br/>
    <input type="number" id="fizRampT"/><br/>
    <input type="number" id="fizRampV"/><br/>
    <button onclick={()=>{popchnijBlok()}}>Oblicz</button>

    <p id="pD"></p>
    
    <div id="trojkatFiz" style="rotate:{degree}deg;">
        <svg height=50 width=50 style="position:relative; left:{offset}px;">
            <rect height=50 width=50 x=0 y=0 fill="blue"/>
        </svg>
        <br/>
        <svg height=2 width=500 style="position:relative; bottom:17px;">
            <rect height=2 width=500 x=0 y=0 fill="black"/>
        </svg>
    </div>
    <svg height=2 width=500 style="position:relative; bottom:17px;">
        <rect height=2 width=500 x=0 y=0 fill="black"/>
    </svg>
    
    
</div>

<style>

</style>