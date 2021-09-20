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
        a
        <div id="seccion-prueba"></div>
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
    }
};

import {
    mdbNavbar,
    mdbNavbarNav,
    mdbNavItem,
    mdbNavbarToggler
} from "mdbvue";
</script>

<style>
#landing {
    min-height: 800px;
    background-image: url("../assets/img/dunas.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-attachment: fixed;
}
#seccion-prueba {
    height: 1000px;
    margin-top: 100vh;
    background-color: black;
}
</style>