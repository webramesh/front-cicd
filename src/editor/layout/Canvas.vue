<template>
    <div class="editior-contain" id="main">
        <div id="gjs"></div>
        <span @click="openNav()" id="push-left" class="open-nav">
            <img src="images/icon15.svg">
        </span>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                
            }
            
        },
        mounted () {

        },
        methods: {
            openNav() {
                var x = document.getElementById("sidebar");
                //  alert(x.style.width)
                if (x.style.width === "") {
                document.getElementById("sidebar").style.width = "280px";
                document.getElementById("main").style.marginLeft = "280px";
                x.style.display = "block";
                document.getElementById("push-left").style.marginLeft = "18%";
                } else {
                document.getElementById("sidebar").style.width = "";
                document.getElementById("main").style.marginLeft = "";
                x.style.display = "none";
                document.getElementById("push-left").style.marginLeft = "0";
            
                }
            },
        }
    }
</script>