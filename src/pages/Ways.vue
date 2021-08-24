<template>
    <section class="ways-wrap p-md-4 p-lg-3">
        <div class="m-container ">
            <div class="m-row justify-content-center ">
                <div class="m-col-12  m-col-md-6 text-center ">
                    <div class="title-box ">
                        <h2>Ways to Creat Website</h2>
                    </div>
                    <p class="mt-md-3 mt-lg-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text of the.</p>
                </div>
            </div>
            <div class="m-row">
                <div class="m-col-12 m-col-md-4 no-gutter-right way-type">
                    <div class="way-wrap mt-md-4  mt-lg-3">
                        <div class="way-number ">
                            <img src="image/numer-one.svg " alt=" ">
                        </div>
                        <div class="sub-title-box mt-md-4 mt-lg-2">
                            <h4>Guided</h4>
                        </div>
                        <div class="way-short-description mt-md-2 mt-lg-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer standard dummy text.
                        </div>
                        <button class="play-btn  mt-md-2 mt-lg-2"> <a href=""><img src="image/play.svg " alt=" "> Watch video</a></button>
                    </div>
                </div>
                <div class="m-col-12 m-col-md-4 no-gutter  way-type">
                    <div class="way-wrap mt-md-4 mt-lg-3">
                        <div class="way-number ">
                            <img src="image/number-two.svg " alt=" ">
                        </div>
                        <div class="sub-title-box mt-md-4 mt-lg-2">
                            <h4>Template</h4>
                        </div>
                        <div class="way-short-description  mt-md-2 mt-lg-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer standard dummy text.
                        </div>
                        <button class="play-btn mt-md- mt-lg-2"><a href=""><img src="image/play.svg " alt=" "> Watch video</a></button>
                    </div>
                </div>
                <div class="m-col-12 m-col-md-4 no-gutter-left way-type">
                    <div class="way-wrap mt-md-4 mt-lg-3">
                        <div class="way-number ">
                            <img src="image/number-three.svg " alt=" ">
                        </div>
                        <div class="sub-title-box mt-md-4 mt-lg-2">
                            <h4>Creat Yourself</h4>
                        </div>
                        <div class="way-short-description  mt-md-2 mt-lg-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer standard dummy text.
                        </div>
                        <button class="play-btn  mt-md-2 mt-lg-2"><a href=""><img src="image/play.svg " alt=" "> Watch video</a> </button>
                    </div>
                </div>
                <div class="m-col-12  mt-md-4 mt-lg-3 text-center">
                    <div class="pointer-btn ">
                        <div class="pointer ">
                            <img src="image/arrow.svg" alt="" srcset="">
                        </div>
                        <router-link :to="{ name: 'process'}" >Creat Stunning Website </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Ways'
}
</script>