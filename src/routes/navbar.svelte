<script>
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
    
    let current = -2;
</script>

<div class="navbar">
    <div class="logo" on:click={() => current = -1}><h2><a href="/">Humans & Golems</a></div>
    <nav class:open={isMenuOpen}>
        <ul>
            <li on:click={()=>{isMenuOpen = false}}><a class:current={current===0} on:click={() => current = 0} href="/about">About</a></li> 
            <li on:click={()=>{isMenuOpen = false}}><a class:current={current===1} on:click={() => current = 1} href="/archive">Archive</a></li>
        </ul>
    </nav>
    <button class="burger" on:click={toggleMenu} class:open={isMenuOpen}>
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </button>
</div>

<style>
    h2 {
        font-size: 20px;
    }
    
    .logo {
        margin-left: 3vw;
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 5vh;
        margin-top: 2vh;
        margin-bottom: 4vh;
        list-style-type: none;
        font-size: 1.1rem;
    }

    li > a {
        display: inline-block;
        transition: all 200ms ease-in-out;
    }

    li > a:hover {
        scale: 1.1;
    }

    li > a:active {
        scale: 0.9;
    }

    .current {
        position: relative;
    }

    .current::after {
        content: "";
        position: absolute;
        display: block;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: wheat;
    }

    .bar1 {
        transform: translateY(-5px);
    }

    .bar3 {
        transform: translateY(5px);
    }

    /* Menu icon animation */
    .burger.open .bar1 {
        transform: rotateZ(45deg);
    }

    .burger.open .bar2 {
        opacity: 0;
    }

    .burger.open .bar3 {
        transform: rotateZ(-45deg);
    }

    /* On small screens, hide the nav and show the burger */
    @media screen and (max-width: 767px) {
        .burger {
            height: 28px;
            aspect-ratio: 1;
            border: 2px solid transparent;
            background-color: transparent;
            border-radius: 5px;
            margin-right: 2vw;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .burger > div {
            height: 2px;
            width: 14px;
            background-color: #333;
            position: absolute;
            transition: all 300ms ease-in-out;
        }

        .navbar {
            margin-top: 1vh;
            margin-bottom: 1vh;
            background-color: transparent;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
        }
        
        nav {
            opacity: 0;
            display: block;
            position: absolute;
            top: 100%;
            left: 0;
            background-color:whitesmoke;
            width: 100%;
            transition: all 300ms ease-in-out;
            pointer-events: none;
        }

        nav.open {
            opacity: 1;
            pointer-events: auto;
        }

        a {
            color: #333;
        }

        li > a {
            color: #333;
        }
    }

    /* On large screens, hide the burger and show the nav */
    @media screen and (min-width: 768px) {
        .burger {
            display: none;
        }

        .navbar {
            margin-top: 1vh;
            background-color: transparent;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
        }

        nav {
            display: block;
            position: relative;
        }

        ul {
            margin: 0;
            flex-direction: row;
            gap: 2vw;
            margin-right: 2vw;
        }

        a {
            color: #333;
        }
    }
</style>
