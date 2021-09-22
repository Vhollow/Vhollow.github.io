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
                    <a href="https://github.com/Vhollow">
                        <mdb-icon fab icon="github" />
                    </a>
                </li>
                <li class="link-item" id="link2">
                    <a href="https://www.linkedin.com/in/vicente-martinez-franco-928697b8">
                        <mdb-icon fab icon="linkedin-in" />
                    </a>
                </li>
                <li class="link-item" id="link3">
                    <a href="#menu">
                        <mdb-icon icon="at" />
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
    position: relative;
    z-index:2;
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
    top: 25vh;
    list-style: none;
    font-size: 200;
    margin: 0 0 0 -16.5vh;
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
    z-index: 1;
    animation: anim-link1 0.5s;
    transform: rotate(30deg) translateY(32vh) rotate(-30deg);
}
@keyframes anim-link1 {
    0% {
        transform: translate(0);
        z-index: 1;
    }
    100%{
        transform: rotate(30deg) translateY(32vh) rotate(-30deg);
        z-index: 1;
    }
}
#link2{
    z-index: 1;
    animation: anim-link2 1s;
    transform: translateY(34vh);
}
@keyframes anim-link2 {
    0% {
        transform: translate(0px);
        z-index: 1;
    }
    100%{
        transform: translateY(34vh);
        z-index: 1;
    }
}
#link3{
    z-index: 1;
    animation: anim-link3 1.5s;
    transform: rotate(-30deg) translateY(32vh) rotate(30deg);
}
@keyframes anim-link3 {
    0% {
        transform: rotate(-30deg);
        z-index: 1;
    }
    100%{
        transform: rotate(-30deg) translateY(32vh) rotate(30deg);
        z-index: 1;
    }
}
</style>