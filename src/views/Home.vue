<template>
  <div class="home">
    <img alt="MDB logo" src="../assets/logo-mdb-vue-small.png">
    <HelloWorld msg="Welcome to Your MDB Vue.js App"/>
    <ul id="links">
                <a class="link-button icon-plus" href="#links"></a>
                <a class="link-button icon-minus" href="#0"></a>
                <li class="link-item">
                    <a href="#menu">
                        <mdb-icon fab icon="github" />
                    </a>
                </li>
                <li class="link-item">
                    <a href="#menu">
                        <mdb-icon fab icon="linkedin-in" />
                    </a>
                </li>
            </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style>
/*menu radial*/
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
.link-button {
    opacity: 0;
    z-index: -1;
    display: block;
    width: 33vh;
    height: 33vh;
    position: absolute;
    left: 50%;
    margin: 0 0 0 -17.5vh;
    background-image: url("../assets/img/prisioner.png");
    border-radius: 50%;
    overflow: hidden;
    background-size: 100%;
}
#links:not(:target)>a:first-of-type,
#links:target>a:last-of-type{
    opacity: 1;
    z-index: 1;
}
#links:not(:target)>.icon-plus:before,
#links:not(:target)>.icon-minus:before{
    opacity: 1;
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
    z-index: 0;
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
#links:target>.link-item:nth-child(3){
    transform: rotate(40deg) translateY(30vh) rotate(-40deg);
    transition-delay: 0.1s;
}
#links:target>.link-item:nth-child(4){
    transform: rotate(-40deg) translateY(30vh) rotate(40deg);
    transition-delay: 0s;
}
</style>