<template>
    <section class="app-need-wrap p-md-1 p-lg-4">
        <div class="m-container ">
            <div class="m-row">
                <div class="m-col-12 text-right mt-md-1 mt-lg-2 ">
                    <div class="vertical-line-o"></div>
                </div>
            </div>
            <div class="m-row  justify-content-center">
                <div class="m-col-12 m-col-md-8 col-lg-6 text-center mt-md-1">
                    <div class="title-box ">
                        <h2>Apps for your every need!</h2>
                    </div>
                    <p class="mt-md-3 mt-lg-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ince the 1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book. It has survived not only five centuries, it has survived not only five centuries.</p>
                    <router-link :to="{ name: 'apps'}" class="m-btn mt-md-3  mt-lg-2">View More <span class="icon-box"><div class="triangle-icon"></div> </span></router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:'Apps'
}
</script>