<template>
    <section class=" mt-sm-1 mt-lg-1">
        <div class="m-container-f ">
            <div class="m-row ">
                <div class="m-col-12 m-col-md-5">
                    <div class="hero-banner mt-sm-1 mt-lg-4 ">
                        <div class="title-box mt-sm-1 mt-md-4">
                            <h1>How easy is to create websites through SiteMakeify.</h1>
                        </div>
                        <p class="mt-sm-3 mt-md-3 mt-lg-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text of the.</p>
                        <router-link :to="{ name: 'process'}" class="m-btn mt-sm-1 mt-md-2 mt-lg-2 "> Start Now <span class="icon-box"><div class="triangle-icon"></div> </span></router-link>
                    </div>
                </div>
                <div class="m-col-12 m-col-md-7">
                    <div class="banner-image-wrap ">
                        <div class="image-box ">
                            <img src="image/office.png " alt=" ">
                            <div class="diagonal-line"></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Banner'
}
</script>