<template>
    <div id="landing">
        <mdb-navbar
          dark
          position="top"
          color="elegant"
        >
            <mdb-navbar-toggler>
                <mdb-navbar-nav right>
                    <mdb-nav-item href="#"> {{ $t('home') }} </mdb-nav-item>
                </mdb-navbar-nav>
            </mdb-navbar-toggler>
        </mdb-navbar>
        
        <div class="seccion text-center">
            <img id="imagen-principal" class="hoverable" src="../assets/img/prisioner.png"/>
            <ul id="links">
                <li class="link-item" id="link1">
                    <a href="#menu">
                        <mdb-icon fab icon="github" />
                    </a>
                </li>
                <li class="link-item" id="link2">
                    <a href="#menu">
                        <mdb-icon fab icon="linkedin-in" />
                    </a>
                </li>
            </ul>
        </div>
        <div class="seccion white-text" id="seccion-prueba">
            <mdb-container>
                <h1> {{ $t('about_me.title') }} </h1>
                <p class="text-left mt-3"> {{ $t('about_me.main_text') }} </p>
            </mdb-container>
        </div>
    </div>
</template>

<script>
export default {
    name: "Landing",
    components: {
        mdbNavbar,
        mdbNavbarNav,
        mdbNavItem,
        mdbNavbarToggler,
        mdbContainer,
        mdbIcon
    }
};

import {
    mdbNavbar,
    mdbNavbarNav,
    mdbNavItem,
    mdbNavbarToggler,
    mdbContainer,
    mdbIcon
} from "mdbvue";
</script>

<style>
#landing {
    min-height: 800px;
    background-image: linear-gradient(#262b53,#6d5a7f,#ae7182);
    /*background-image: url("../assets/img/dunas.png");*/
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-attachment: fixed;
}
.seccion{
    min-height: 100vh;
    padding: 5%;
}
#imagen-principal {
    height: 33vh;
    margin-top: 25vh;
    border-radius: 50%;
}
#seccion-prueba {
    background-color: black;
}
.carta-prueba {
    width: 20vw;
}
#links {
    width: 33vh;
    height: 33vh;
    position: absolute;
    left: 50%;
    top: 33vh;
    list-style: none;
    font-size: 200;
    margin: 0 0 0 -17.5vh;
}
.link-item {
    width: 70px;
    height: 70px;
    position: absolute;
    left: 55%;
    top: 50%;
    line-height: 5px;
    border-radius: 50%;
    margin: -50px 0 0 -50px;
    transform: translate(0,0);
    transition: transform 500ms;
    z-index: -10;
    transition: .5s;
    background-color: black;
    font-size: 1.75rem;
}
.link-item:hover {
    opacity: 0.5;
}
.link-item a {
    position: relative;
    top:30%;
    cursor: pointer;
    left: 0;
    text-decoration: none;
    color: white;
}
#link1{
    transform: translateX(70px) translateY(25vh);
    z-index: 1;
    animation: anim-link1 1s;
}
@keyframes anim-link1 {
    0% {
        transform: translateX(70px) translateY(0vh);
        z-index: 1;
    }
    100%{
        transform: translateX(70px) translateY(25vh);
        transition-delay: 0.1s;
        z-index: 1;
    }
}
#link2{
    transform: translateX(-70px) translateY(25vh);
    z-index: 1;
    animation: anim-link2 1s;
}
@keyframes anim-link2 {
    0% {
        transform: translateX(-70px) translateY(0vh);
        z-index: 1;
    }
    100%{
        transform: translateX(-70px) translateY(25vh);
        transition-delay: 0s;
        z-index: 1;
    }
}
</style>