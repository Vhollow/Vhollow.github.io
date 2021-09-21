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
            <img id="imagen-principal" class="hoverable" src="../assets/img/prueba_perfil.webp"/>
        </div>
        <div class="seccion" id="seccion-prueba">
            <mdb-card-group deck>
                <mdb-card class="carta-prueba">
                    <mdb-view hover>
                        <a href="#!">
                            <mdb-card-image
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg"
                                alt="Card image cap"/>
                            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                        </a>
                    </mdb-view>
                    <mdb-card-body>
                        <mdb-card-title>Card with waves effect</mdb-card-title>
                        <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                        <mdb-btn color="primary">Button</mdb-btn>
                    </mdb-card-body>
                </mdb-card>
                <mdb-card class="carta-prueba">
                    <mdb-view hover>
                        <a href="#!">
                            <mdb-card-image
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg"
                                alt="Card image cap"/>
                            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                        </a>
                    </mdb-view>
                    <mdb-card-body>
                        <mdb-card-title>Card with waves effect</mdb-card-title>
                        <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                        <mdb-btn color="primary">Button</mdb-btn>
                    </mdb-card-body>
                </mdb-card>
                <mdb-card class="carta-prueba">
                    <mdb-view hover>
                        <a href="#!">
                            <mdb-card-image
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg"
                                alt="Card image cap"/>
                            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                        </a>
                    </mdb-view>
                    <mdb-card-body>
                        <mdb-card-title>Card with waves effect</mdb-card-title>
                        <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                        <mdb-btn color="primary">Button</mdb-btn>
                    </mdb-card-body>
                </mdb-card>
            </mdb-card-group>
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
        mdbView,
        mdbCard,
        mdbCardGroup,
        mdbCardImage,
        mdbCardTitle,
        mdbCardText,
        mdbMask,
        mdbCardBody,
        mdbBtn
    }
};

import {
    mdbNavbar,
    mdbNavbarNav,
    mdbNavItem,
    mdbNavbarToggler,
    mdbView,
    mdbCard,
    mdbCardGroup,
    mdbCardImage,
    mdbCardTitle,
    mdbCardText,
    mdbMask,
    mdbCardBody,
    mdbBtn
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
    height: 100vh;
    padding: 5%;
}
#imagen-principal {
    height: 33vh;
    margin-top: 28vh;
    border-radius: 50%;
}
#seccion-prueba {
    background-color: black;
}
.carta-prueba {
    width: 20vw;
}
</style>