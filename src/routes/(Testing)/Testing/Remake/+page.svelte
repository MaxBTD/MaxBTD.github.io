<script>
    //math.max
    import { mousePosition } from './store.js';
	const coords =  mousePosition();
    

    $: innerWidth = 0;
    $: innerHeight = 0;
    $: ofsetX = innerWidth/2-$coords.x;
</script>

    <svelte:window bind:innerWidth bind:innerHeight/>

<div id="mainDiv">

    <button id="freakyBtn">{innerWidth/2}</button>
    <h1>{ofsetX}</h1>
    <h1>{$coords.y}</h1>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="position: absolute;transform: translateX({ofsetX/1000}em) translateY({$coords.y/1500-5}em);">
            <path fill="#0099ff" fill-opacity="1" d="M0,128L60,128C120,128,240,128,360,133.3C480,139,600,149,720,149.3C840,149,960,139,1080,133.3C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="position: absolute;top:18em;transform: translateX({ofsetX/700}em) translateY({$coords.y/1400}em);">
            <path fill="#00bbff" fill-opacity="1" d="M0,128L48,122.7C96,117,192,107,288,96C384,85,480,75,576,85.3C672,96,768,128,864,138.7C960,149,1056,139,1152,149.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="position: absolute;transform: translateX({ofsetX/300}em) translateY({$coords.y/1300}em);">
            <path fill="#00ddff" fill-opacity="1" d="M0,256L48,245.3C96,235,192,213,288,197.3C384,181,480,171,576,170.7C672,171,768,181,864,186.7C960,192,1056,192,1152,192C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="position: absolute;top:18em;transform: translateX({ofsetX/100}em) translateY({$coords.y/12500}em);">
            <path fill="#00eeff" fill-opacity="1" d="M0,96L48,122.7C96,149,192,203,288,218.7C384,235,480,213,576,208C672,203,768,213,864,224C960,235,1056,245,1152,245.3C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
    </div>
</div>

<style>

    #freakyBtn{
        clip-path: polygon(0 0, 100% 0, 100% 34%, 94% 41%, 100% 48%, 100% 100%, 0 100%, 0 31%, 5% 20%, 0 14%);
        background-color: #5f3a29;
        font-size: 2em;
        height: 3em;
        vertical-align: top;
        border: 0;
        padding: 0.5em 2em 3em 2em;
        transition: 0.5s;
        color: beige;
        border-left: 0.15em solid #8a5b46;
        border-top: 0.15em solid #8a5b46;
        border-right: 0.15em solid #331d13;
        border-bottom: 0.15em solid #331d13;
    }

    #freakyBtn:hover{
        background-color: #502d1d;
        cursor: pointer;
    }

</style>