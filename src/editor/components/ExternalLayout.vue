<script>
export default {
   name: 'ExternalLayout'
}
</script>

<template>
   <div>
       <!-- Header Section -->
       <header class="pt-header" data-app-name="header">
           <div class="container">
               <div class="pt-header-sec">
                   <nav class="navbar navbar-expand-lg navbar-light px-0">
                       <a class="navbar-brand d-flex align-items-center" href="index.html">
                           <span class="pt-header-logo">E</span>
                           <span class="pt-header-logo-a">
                               Education<br>
                               Consultancy
                           </span>
                       </a> <!-- navbar-brand closing -->
                       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                           <span class="navbar-toggler-icon"></span>
                       </button>
                       <div class="collapse navbar-collapse justify-content-end" id="navbarText">
                           <ul class="navbar-nav">
                               <li class="nav-item active"><a class="nav-link" href="pages/about/about.html" data-app-name="about">About</a></li>
                               <li class="nav-item"><a class="nav-link" href="pages/services/services.html" data-app-name="services">Services</a></li>
                               <li class="nav-item"><a class="nav-link" href="" data-app-name="team">Team</a></li>
                               <li class="nav-item"><a class="nav-link" href="" data-app-name="testimonial">Testimonial</a></li>
                               <li class="nav-item"><a class="nav-link" href="" data-app-name="blog">Blog</a></li>
                               <li class="nav-item"><a class="nav-link" href="" data-app-name="events">Events</a></li>
                               <li class="nav-item"><a class="nav-link" href="" data-app-name="gallery">Gallery</a></li>
                               <li class="nav-item"><a class="nav-link" href="" data-app-name="faq">FAQs</a></li>
                               <li class="nav-item"><a class="nav-link" href="" data-app-name="contact">Contact</a></li>
                           </ul>
                       </div>
                   </nav>
               </div> <!-- pt-header-sec closing -->
           </div>
           <!-- container -->
       </header>

       <!-- Hero Section -->
       <section class="pt-hero slider_section"  data-app-type="home" data-app-name="slider">
           <div class="pt-hero-slider">
               <div class="pt-hero-sec pt-hero-img slider_image" style="background: url(/images/photo-1541339907198-e08756dedf3f.png);" alt="slider_image">
                   <div class="pt-hero-overlay">
                       <div class="container">
                           <div class="row justify-content-center pt-hero-overlay-row">
                               <h1 class="pt-hero-title slider_title">Be the best you can be</h1>
                           </div>
                       </div>
                   </div>
               </div> <!-- pt-hero-sec closing -->
               <div class="pt-hero-sec pt-hero-img1 slider_image" style="background: url(/images/photo-1523050854058-8df90110c9f1.png);" alt="slider_image">
                   <div class="pt-hero-overlay">
                       <div class="container">
                           <div class="row justify-content-center pt-hero-overlay-row">
                               <h1 class="pt-hero-title slider_title">Be the best you can be</h1>
                           </div>
                       </div>
                   </div>
               </div> <!-- pt-hero-sec closing -->
           </div>
       </section>

       <!-- About Section -->
       <section class="pt-about about_section" data-app-type="home" data-app-name="about" data-show="true">
           <div class="pt-about-sec about_section">
               <div class="container">
                   <div class="pt-about-sec-header">
                       <!-- SVG icon -->
                       <div class="pt-about-sec-top">
                           <svg class="pt-graduate-cap-svg about_thumbnail_image" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                               viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                               <g>
                                   <g>
                                       <path d="M512,349.984c0-19.53-12.578-36.024-30-42.237V152.353l30-12.369L256,37.27L0,139.984l256,102.715l196-78.3v143.348
                                           c-17.422,6.213-30,22.707-30,42.237c0,17.88,10.56,33.228,25.701,40.481l-24.924,74.773l28.447,9.492L467,427.401l15.776,47.329
                                           l28.447-9.492l-24.924-74.773C501.44,383.213,512,367.865,512,349.984z"/>
                                   </g>
                               </g>
                               <g>
                                   <g>
                                       <path d="M256,275.028L121,220.82v39.164c0,42.759,58.037,75,135,75s135-32.241,135-75V220.82L256,275.028z"/>
                                   </g>
                               </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                           </svg>
                       </div>
                       <!-- SVG icon Closed -->
                   </div>

                   <div class="pt-about-wrapper text-center">
                       <h2 class="pt-about-title about_title">Your Aboard Education Journey Start here</h2>
                       <p class="pt-about-description about_short_description">
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                           Incidunt, dolore, quos quae eveniet, aliquam eligendi ad
                           minus totam nulla delectus quas. Magnam, asperiores error
                           sapiente recusandae ipsum ex rerum itaque?
                       </p>
                       <button class="btn pt-button pt-btn-about url_ink" type="button">Explore More</button>
                   </div>

               </div>
           </div>
       </section>

       <!-- Service Section -->
       <section class="pt-service service_section" data-app-type="home" data-app-name="service" data-show="true">
           <div class="pt-service-sec">
               <div class="container">
                   <h1 class="text-center pt-service-title service_section_title">Get Best Services from the Industry Experts</h1>

                   <div class="card-deck pt-service-card-deck">
                       <div class="card pt-service-card">
                           <img class="card-img-top pt-service-img service_thumbnail_image" src="/images/photo-1551836022-d5d88e9218df.png" alt="Card image cap">
                           <div class="card-body text-center pt-service-card-body">
                               <h4 class="pt-service-card-title service_title">Carrer Counseling</h4>

                           </div>
                           <div class="card-footer text-center pt-service-card-footer">
                               <button class="btn pt-button pt-service-btn url_ink" type="button">Know More</button>
                           </div>
                       </div>
                       <div class="card pt-service-card">
                           <img class="card-img-top pt-service-img service_thumbnail_image" src="/images/photo-2021-01-25T180003.987.jpg" alt="Card image cap">
                           <div class="card-body text-center pt-service-card-body">
                               <h4 class="pt-service-card-title service_title">Test Preparation</h4>

                           </div>
                           <div class="card-footer text-center pt-service-card-footer">
                               <button class="btn pt-button pt-service-btn url_ink" type="button">Know More</button>
                           </div>
                       </div>
                       <div class="card pt-service-card">
                           <img class="card-img-top pt-service-img service_thumbnail_image" src="/images/photo-1565034946487-077786996e27.png" alt="Card image cap">
                           <div class="card-body text-center pt-service-card-body">
                               <h4 class="pt-service-card-title service_title">Abroad Study</h4>

                           </div>
                           <div class="card-footer text-center pt-service-card-footer">
                               <button class="btn pt-button pt-service-btn url_ink" type="button">Know More</button>
                           </div>
                       </div>
                   </div>
                   <!-- -->
               </div>
           </div>
       </section>

       <!-- Team Section -->
       <section class="pt-team team_section">
           <div class="pt-team-sec">
               <div class="container">
                   <div class="pt-team-wrapper-header text-center">
                       <h1 class="pt-team-header-title team_section_title">Incredibly Team</h1>
                       <p class="pt-team-header-description team_section_description">
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                           Eius quibusdam non, dolor possimus corrupti id modi consequuntur voluptatum
                           quod eos doloremque nemo officiis dignissimos maiores, consectetur
                           laboriosam reiciendis sint quas.
                       </p>
                   </div>
                   <!-- team slider -->
                   <div class="card-deck pt-team-card-deck pt-team-slider">
                       <div class="card pt-team-card">
                           <img class="card-img-top pt-team-card-img team_image" src="/images/photo-1559718062-361155fad299.png" alt="Card image cap">
                           <div class="card-body pt-team-card-body text-center">
                               <h5 class="card-title pt-team-card-title team_title">Jonnathan Mathew</h5>
                               <p class="card-text pt-team-card-position team_position">CEO</p>
                           </div>
                       </div> <!-- card closing -->
                       <div class="card pt-team-card">
                           <img class="card-img-top pt-team-card-img team_image" src="/images/photo-1573166475912-1ed8b4f093d2.png" alt="Card image cap">
                           <div class="card-body pt-team-card-body text-center">
                               <h5 class="card-title pt-team-card-title team_title">Pamela Lee</h5>
                               <p class="card-text pt-team-card-position team_position">Head of Counseling</p>
                           </div>
                       </div> <!-- card closing -->
                       <div class="card pt-team-card">
                           <img class="card-img-top pt-team-card-img team_image" src="/images/photo-1557862921-37829c790f19.png" alt="Card image cap">
                           <div class="card-body pt-team-card-body text-center">
                               <h5 class="card-title pt-team-card-title team_title">Bishoon Singh</h5>
                               <p class="card-text pt-team-card-position team_position">Head of Academics</p>
                           </div>
                       </div> <!-- card closing -->
                       <div class="card pt-team-card">
                           <img class="card-img-top pt-team-card-img team_image" src="/images/photo-1495603889488-42d1d66e5523.png" alt="Card image cap">
                           <div class="card-body pt-team-card-body text-center">
                               <h5 class="card-title pt-team-card-title team_title">Denver Ali</h5>
                               <p class="card-text pt-team-card-position team_position">Head of Marketing</p>
                           </div>
                       </div> <!-- card closing -->
                       <div class="card pt-team-card">
                           <img class="card-img-top pt-team-card-img team_image" src="/images/photo-1592329347431-0943ca753471.png" alt="Card image cap">
                           <div class="card-body pt-team-card-body text-center">
                               <h5 class="card-title pt-team-card-title team_title">Emma</h5>
                               <p class="card-text pt-team-card-position team_position">Head of Research</p>
                           </div>
                       </div> <!-- card closing -->
                   </div> <!-- card deck closing -->

                   <div class="text-center">
                       <button class="btn pt-button pt-btn-team url_ink">Know More</button>
                   </div>
               </div><!-- container closing -->
           </div>
       </section>

       <!-- Testimonial Section -->
       <section class="pt-testimonial testimonial_section" data-app-type="home" data-app-name="testimonial" data-show="true">
           <div class="pt-testimonail-sec">
               <div class="container">
                   <h1 class="text-center pt-testimonail-title testimonial_section_title">What our Students Say About Us</h1>
                   <!-- card-deck section -->
                   <div class="card-deck pt-testimonial-slider">
                       <div class="card pt-testimonial-card">
                           <img class="card-img-top pt-testimonial-card-img testimonial_image" src="/images/photo-1513258496099-48168024aec0.png" alt="Card image cap">
                           <div class="card-body pt-testimonial-card-body text-center">
                               <p class="card-text pt-testimonial-description testimonial_description">
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus nulla, viverra in elementum id, viverra a turpis.
                                   Sed sollicitudin, risus in ultrices ornare, porttitor posuere mi est in quam. Vestibulum hendrerit facilisis tellus quis aliquet.
                               </p>
                               <p class="pt-testimonial-detail testimonial_name">- Jeswin Thomas, Canada</p>
                           </div>
                           <div class="card-footer pt-testimonail-footer">
                               <div class="pt-testimonail-rating-wrapper text-center">
                                   <!-- SVG icon Star -->
                                   <svg class="pt-testimonail-rating" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                       <g>
                                           <g>
                                               <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431
                                                   255.898,401.21 416.035,502.431 369.263,318.842 		"/>
                                           </g>
                                       </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                   </svg>
                                   <svg class="pt-testimonail-rating" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                       <g>
                                           <g>
                                               <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431
                                                   255.898,401.21 416.035,502.431 369.263,318.842 		"/>
                                           </g>
                                       </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                   </svg>
                                   <svg class="pt-testimonail-rating" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                       <g>
                                           <g>
                                               <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431
                                                   255.898,401.21 416.035,502.431 369.263,318.842 		"/>
                                           </g>
                                       </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                   </svg>
                                   <svg class="pt-testimonail-rating" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                       <g>
                                           <g>
                                               <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431
                                                   255.898,401.21 416.035,502.431 369.263,318.842 		"/>
                                           </g>
                                       </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                   </svg>
                                   <svg class="pt-testimonail-rating" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                       <g>
                                           <g>
                                               <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431
                                                   255.898,401.21 416.035,502.431 369.263,318.842 		"/>
                                           </g>
                                       </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                   </svg>
                                   <!-- SVG icon Star -->
                               </div>
                               <!-- Star Wrapper Closing -->
                           </div>
                       </div>
                       <!-- card section closing -->
                       <div class="card pt-testimonial-card">
                           <img class="card-img-top pt-testimonial-card-img testimonial_image" src="/images/photo-1513258496099-48168024aec0.png" alt="Card image cap">
                           <div class="card-body pt-testimonial-card-body text-center">
                               <p class="card-text pt-testimonial-description testimonial_description">
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus nulla, viverra in elementum id, viverra a turpis.
                                   Sed sollicitudin, risus in ultrices ornare, porttitor posuere mi est in quam. Vestibulum hendrerit facilisis tellus quis aliquet.
                               </p>
                               <p class="pt-testimonial-detail testimonial_name">- Jeswin Thomas, Canada</p>
                           </div>
                           <div class="card-footer pt-testimonail-footer">
                               <div class="pt-testimonail-rating-wrapper text-center">
                                   <!-- SVG icon Star -->
                                   <svg class="pt-testimonail-rating" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                       <g>
                                           <g>
                                               <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431
                                                   255.898,401.21 416.035,502.431 369.263,318.842 		"/>
                                           </g>
                                       </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                   </svg>
                                   <svg class="pt-testimonail-rating" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                       <g>
                                           <g>
                                               <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431
                                                   255.898,401.21 416.035,502.431 369.263,318.842 		"/>
                                           </g>
                                       </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                   </svg>
                                   <svg class="pt-testimonail-rating" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                       <g>
                                           <g>
                                               <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431
                                                   255.898,401.21 416.035,502.431 369.263,318.842 		"/>
                                           </g>
                                       </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                   </svg>
                                   <svg class="pt-testimonail-rating" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                       <g>
                                           <g>
                                               <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431
                                                   255.898,401.21 416.035,502.431 369.263,318.842 		"/>
                                           </g>
                                       </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                   </svg>
                                   <svg class="pt-testimonail-rating" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                       <g>
                                           <g>
                                               <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431
                                                   255.898,401.21 416.035,502.431 369.263,318.842 		"/>
                                           </g>
                                       </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                   </svg>
                                   <!-- SVG icon Star -->
                               </div>
                               <!-- Star Wrapper Closing -->
                           </div>
                       </div>
                       <!-- card section closing -->
                       <div class="card pt-testimonial-card">
                           <img class="card-img-top pt-testimonial-card-img testimonial_image" src="/images/photo-1513258496099-48168024aec0.png" alt="Card image cap">
                           <div class="card-body pt-testimonial-card-body text-center">
                               <p class="card-text pt-testimonial-description testimonial_description">
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus nulla, viverra in elementum id, viverra a turpis.
                                   Sed sollicitudin, risus in ultrices ornare, porttitor posuere mi est in quam. Vestibulum hendrerit facilisis tellus quis aliquet.
                               </p>
                               <p class="pt-testimonial-detail testimonial_name">- Jeswin Thomas, Canada</p>
                           </div>
                           <div class="card-footer pt-testimonail-footer">
                               <div class="pt-testimonail-rating-wrapper text-center">
                                   <!-- SVG icon Star -->
                                   <svg class="pt-testimonail-rating" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                       <g>
                                           <g>
                                               <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431
                                                   255.898,401.21 416.035,502.431 369.263,318.842 		"/>
                                           </g>
                                       </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                   </svg>
                                   <svg class="pt-testimonail-rating" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                       <g>
                                           <g>
                                               <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431
                                                   255.898,401.21 416.035,502.431 369.263,318.842 		"/>
                                           </g>
                                       </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                   </svg>
                                   <svg class="pt-testimonail-rating" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                       <g>
                                           <g>
                                               <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431
                                                   255.898,401.21 416.035,502.431 369.263,318.842 		"/>
                                           </g>
                                       </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                   </svg>
                                   <svg class="pt-testimonail-rating" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                       <g>
                                           <g>
                                               <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431
                                                   255.898,401.21 416.035,502.431 369.263,318.842 		"/>
                                           </g>
                                       </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                   </svg>
                                   <svg class="pt-testimonail-rating" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                       <g>
                                           <g>
                                               <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431
                                                   255.898,401.21 416.035,502.431 369.263,318.842 		"/>
                                           </g>
                                       </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                   </svg>
                                   <!-- SVG icon Star -->
                               </div>
                               <!-- Star Wrapper Closing -->
                           </div>
                       </div>
                       <!-- card section closing -->
                       <div class="card pt-testimonial-card">
                           <img class="card-img-top pt-testimonial-card-img testimonial_image" src="/images/photo-1513258496099-48168024aec0.png" alt="Card image cap">
                           <div class="card-body pt-testimonial-card-body text-center">
                               <p class="card-text pt-testimonial-description testimonial_description">
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus nulla, viverra in elementum id, viverra a turpis.
                                   Sed sollicitudin, risus in ultrices ornare, porttitor posuere mi est in quam. Vestibulum hendrerit facilisis tellus quis aliquet.
                               </p>
                               <p class="pt-testimonial-detail testimonial_name">- Jeswin Thomas, Canada</p>
                           </div>
                           <div class="card-footer pt-testimonail-footer">
                               <div class="pt-testimonail-rating-wrapper text-center">
                                   <!-- SVG icon Star -->
                                   <svg class="pt-testimonail-rating" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                       <g>
                                           <g>
                                               <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431
                                                   255.898,401.21 416.035,502.431 369.263,318.842 		"/>
                                           </g>
                                       </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                   </svg>
                                   <svg class="pt-testimonail-rating" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                       <g>
                                           <g>
                                               <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431
                                                   255.898,401.21 416.035,502.431 369.263,318.842 		"/>
                                           </g>
                                       </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                   </svg>
                                   <svg class="pt-testimonail-rating" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                       <g>
                                           <g>
                                               <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431
                                                   255.898,401.21 416.035,502.431 369.263,318.842 		"/>
                                           </g>
                                       </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                   </svg>
                                   <svg class="pt-testimonail-rating" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                       <g>
                                           <g>
                                               <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431
                                                   255.898,401.21 416.035,502.431 369.263,318.842 		"/>
                                           </g>
                                       </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                   </svg>
                                   <svg class="pt-testimonail-rating" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                       <g>
                                           <g>
                                               <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431
                                                   255.898,401.21 416.035,502.431 369.263,318.842 		"/>
                                           </g>
                                       </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                   </svg>
                                   <!-- SVG icon Star -->
                               </div>
                               <!-- Star Wrapper Closing -->
                           </div>
                       </div>
                       <!-- card section closing -->
                   </div>
                   <!-- card-deck section closing -->
               </div>
           </div>
       </section>

       <!-- Blog Section -->
       <section class="pt-blog blog_section" data-app-type="home" data-app-name="blog" data-show="true">
           <div class="pt-blog-sec">
               <div class="container">
                   <div class="pt-blot-wrapper-header text-center">
                       <h1 class="pt-blog-header-title blog_section_title">Blog</h1>
                       <p class="pt-blog-header-description blog_section_description">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, adipisci consequatur tempore suscipit enim ipsa,
                           totam tenetur provident repellendus aliquid recusandae explicabo praesentium pariatur sed, architecto aspernatur fugit sapiente deleniti.
                       </p>
                   </div>
                   <!-- card layout -->
                   <div class="card-deck pt-blog-card-deck">
                       <div class="card pt-blog-card">
                           <img class="card-img-top pt-blog-img blog_image" src="/images/photo-1454165804606-c3d57bc86b40.png" alt="Card image cap">
                           <div class="card-body pt-blog-card-body">
                               <h5 class="card-title pt-blog-title blog_title">Your Latest News & Updates Blog Headline One</h5>
                               <span class="pt-blog-date blog_published_date">DD/MM/YYYY</span>
                               <p class="card-text pt-blog-description blog_short_description">
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus nulla, viverra in elementum id,
                                   viverra a turpis. Sed sollicitudin, risus in ultrices ornare, enim eros tempor magna, porttitor posuere mi est in quam.
                                   Vestibulum hendrerit facilisis tellus quis aliquet. Duis faucibus arcu eu posuere tempor. Duis ac vestibulum sem.
                               </p>
                           </div>
                           <div class="card-footer pt-blog-footer">
                               <button class="btn pt-button pt-blog-btn url_ink">Read More</button>
                           </div>
                       </div>
                       <div class="card pt-blog-card">
                           <img class="card-img-top pt-blog-img blog_image" src="/images/photo-1523050854058-8df90110c9f1.png" alt="Card image cap">
                           <div class="card-body pt-blog-card-body">
                               <h5 class="card-title pt-blog-title blog_title">Your Latest News & Updates Blog Headline Two</h5>
                               <span class="pt-blog-date blog_published_date">DD/MM/YYYY</span>
                               <p class="card-text pt-blog-description blog_short_description">
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus nulla, viverra in elementum id,
                                   viverra a turpis. Sed sollicitudin, risus in ultrices ornare, enim eros tempor magna, porttitor posuere mi est in quam.
                                   Vestibulum hendrerit facilisis tellus quis aliquet. Duis faucibus arcu eu posuere tempor. Duis ac vestibulum sem.
                               </p>
                           </div>
                           <div class="card-footer pt-blog-footer">
                               <button class="btn pt-button pt-blog-btn url_ink">Read More</button>
                           </div>
                       </div>
                   </div>
               </div><!-- container closing -->
           </div>
       </section>

       <!-- Events Section -->
       <section class="pt-event event_section" data-app-type="home" data-app-name="event" data-show="true">
           <div class="pt-event-sec">
               <div class="container">
                   <h1 class="pt-event-head-title text-center event_section_title">Upcoming Events</h1>
                   <div class="card-deck pt-event-slider">
                       <!-- card -->
                       <div class="card pt-event-card text-center">
                           <div class="card-img-top pt-event-date">
                               <div class="pt-event-date-wrapper">
                                   <a class="pt-event-day">
                                       <span class="pt-event-day-span event_date"> 22 </span> <br>
                                       <span class="pt-event-year event_year">nov 2021</span>
                                   </a>
                               </div>
                           </div>
                           <div class="card-body pt-event-card-body">
                               <h5 class="card-title pt-event-title event_title">Student Day Celebrations & Carnival 2021</h5>
                               <p class="card-text pt-event-description event_short_description">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                           </div>
                           <div class="card-footer pt-event-footer">
                               <button class="btn pt-event-btn url_ink" type="button">Know More</button>
                           </div>
                       </div>
                       <!-- card closing -->
                       <!-- card -->
                       <div class="card pt-event-card text-center">
                           <div class="card-img-top pt-event-date">
                               <div class="pt-event-date-wrapper">
                                   <a class="pt-event-day">
                                       <span class="pt-event-day-span event_date"> 18 </span> <br>
                                       <span class="pt-event-year event_year">jan 2021</span>
                                   </a>
                               </div>
                           </div>
                           <div class="card-body pt-event-card-body">
                               <h5 class="card-title pt-event-title event_title">Student Day Celebrations & Carnival 2021</h5>
                               <p class="card-text pt-event-description event_short_description">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                           </div>
                           <div class="card-footer pt-event-footer">
                               <button class="btn pt-event-btn url_ink" type="button">Know More</button>
                           </div>
                       </div>
                       <!-- card closing -->
                       <!-- card -->
                       <div class="card pt-event-card text-center">
                           <div class="card-img-top pt-event-date">
                               <div class="pt-event-date-wrapper">
                                   <a class="pt-event-day">
                                       <span class="pt-event-day-span event_date"> 06 </span> <br>
                                       <span class="pt-event-year event_year">oct 2022</span>
                                   </a>
                               </div>
                           </div>
                           <div class="card-body pt-event-card-body">
                               <h5 class="card-title pt-event-title event_title">Student Day Celebrations & Carnival 2021</h5>
                               <p class="card-text pt-event-description event_short_description">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                           </div>
                           <div class="card-footer pt-event-footer">
                               <button class="btn pt-event-btn url_ink" type="button">Know More</button>
                           </div>
                       </div>
                       <!-- card closing -->
                   </div>
               </div>
           </div>
       </section>

       <!-- Gallery Section -->
       <section class="pt-gallery gallrey_section" data-app-type="home" data-app-name="gallery" data-show="true">
           <div class="pt-gallery-sec">
               <div class="container text-center">
                   <h1 class="pt-gallery-title gallery_section_title">Image Gallery</h1>

                   <div class="row pt-gallery-row">
                       <div class="col-md-4 pt-gallery-col">
                           <a class="pt-gallery-col-a" href="">
                               <img class="pt-gallery-img gallery_thumbnail_image" src="/images/photo-1522202176988-66273c2fd55f.png" alt="image-gallery">
                           </a>
                       </div>
                       <div class="col-md-4 pt-gallery-col">
                           <a class="pt-gallery-col-a" href="">
                               <img class="pt-gallery-img gallery_thumbnail_image" src="/images/photo-1527980965255-d3b416303d12.png" alt="image-gallery">
                           </a>
                       </div>
                       <div class="col-md-4 pt-gallery-col">
                           <a class="pt-gallery-col-a" href="">
                               <img class="pt-gallery-img gallery_thumbnail_image" src="/images/photo-1454165804606-c3d57bc86b40.png" alt="image-gallery">
                           </a>
                       </div>
                       <div class="col-md-4 pt-gallery-col">
                           <a class="pt-gallery-col-a" href="">
                               <img class="pt-gallery-img gallery_thumbnail_image" src="/images/photo-1531482615713-2afd69097998.png" alt="image-gallery">
                           </a>
                       </div>
                       <div class="col-md-4 pt-gallery-col">
                           <a class="pt-gallery-col-a" href="">
                               <img class="pt-gallery-img gallery_thumbnail_image" src="/images/photo-1477959858617-67f85cf4f1df.png" alt="image-gallery">
                           </a>
                       </div>
                       <div class="col-md-4 pt-gallery-col">
                           <a class="pt-gallery-col-a" href="">
                               <img class="pt-gallery-img gallery_thumbnail_image" src="/images/photo-1594686948539-2709857f7066.png" alt="image-gallery">
                           </a>
                       </div>
                   </div><!-- row closing -->
                   <button class="btn pt-gallery-btn url_ink">View More</button>
               </div>
           </div>
       </section>

       <!-- FAQs Section -->
       <section class="pt-faq faq_section">
           <div class="pt-faq-sec">
               <div class="container">
                   <div class="pt-faq-wrapper text-center">
                       <h2 class="pt-faq-title faq_section_title">FAQs</h2>
                       <p class="pt-faq-description faq_section_description">
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                           Incidunt, dolore, quos quae eveniet, aliquam eligendi ad
                           minus totam nulla delectus quas. Magnam, asperiores error
                           sapiente recusandae ipsum ex rerum itaque?
                       </p>
                   </div>

                   <!-- Accordion Wrapper -->
                   <div class="accordion pt-faq-accordion" id="accordion1" role="tablist" aria-multiselectable="true">
                       <!-- Accordion card -->
                       <div class="card pt-faq-card">
                           <!-- Card Header -->
                           <div class="card-header pt-faq-card-header" role="tab" id="heading1">
                               <a class="collapsed pt-faq-card-header-a" data-toggle="collapse" data-parent="#accordion1" href="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                   <h5 class="pt-faq-question faq_question">
                                       FAQ Question 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. <i class="fas fa-angle-down rotate-icon"></i>
                                   </h5>
                               </a>
                           </div>

                           <!-- Card Body -->
                           <div id="collapse1" class="collapse pt-faq-card-collapse" role="tabpanel" aria-labelledby="heading1" data-parent="#accordion1">
                               <div class="card-body pt-faq-card-body faq_answer">
                                   Praesent lorem nunc, posuere id leo ut, vulputate placerat turpis. Integer vitae ante ut nibh porta tincidunt ac ac neque.
                                   Sed sed nisi scelerisque magna molestie vulputate. Nunc faucibus neque est. Quisque sem eros, efficitur vitae dui sit amet, congue feugiat augue.
                               </div>
                           </div>
                       </div>
                       <!-- Accordion card -->

                       <!-- Accordion card -->
                       <div class="card pt-faq-card">
                           <!-- Card Header -->
                           <div class="card-header pt-faq-card-header" role="tab" id="heading2">
                               <a class="collapsed pt-faq-card-header-a" data-toggle="collapse" data-parent="#accordion1" href="#collapse2" aria-expanded="false" aria-controls="collapse">
                                   <h5 class="pt-faq-question faq_question">
                                       FAQ Question 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. <i class="fas fa-angle-down rotate-icon"></i>
                                   </h5>
                               </a>
                           </div>

                           <!-- Card Body -->
                           <div id="collapse2" class="collapse pt-faq-card-collapse" role="tabpanel" aria-labelledby="heading2" data-parent="#accordion2">
                               <div class="card-body pt-faq-card-body faq_answer">
                                   Praesent lorem nunc, posuere id leo ut, vulputate placerat turpis. Integer vitae ante ut nibh porta tincidunt ac ac neque.
                                   Sed sed nisi scelerisque magna molestie vulputate. Nunc faucibus neque est.
                                   Quisque sem eros, efficitur vitae dui sit amet, congue feugiat augue.
                               </div>
                           </div>
                       </div>
                       <!-- Accordion card -->

                   </div>
                   <!-- Accordion wrapper closing -->

                   <!-- Button -->
                   <div class="pt-faq-btn-wrapper text-center">
                       <button class="btn pt-faq-btn url_ink">More</button>
                   </div>

               </div>
           </div>
       </section>

       <!-- Footer Section -->
       <footer class="pt-footer" data-app-name="footer">
           <div class="pt-footer-sec">
               <div class="container">
                   <div class="row pt-footer-top">
                       <div class="col-md-3 pt-footer-logo">
                           <a class="navbar-brand d-flex" href="#">
                           <!-- <a class="navbar-brand d-flex align-items-center" href="#"> -->
                               <span class="pt-header-logo">E</span>
                               <span class="pt-header-logo-a">
                                   Education<br>
                                   Consultancy
                               </span>
                           </a> <!-- navbar-brand closing -->
                       </div>
                       <div class="col-md-3 pt-footer-top-menu-col">
                           <div class="pt-footer-top-menu">
                               <h5 class="pt-footer-top-menu-title">Quick Menu</h5>
                               <ul class="pt-footer-top-menu-ul">
                                   <li class="pt-footer-top-menu-ul-li"><a class="" href="">About</a></li>
                                   <li class="pt-footer-top-menu-ul-li"><a class="" href="">Services</a></li>
                                   <li class="pt-footer-top-menu-ul-li"><a class="" href="">Team</a></li>
                                   <li class="pt-footer-top-menu-ul-li"><a class="" href="">Testimonial</a></li>
                                   <li class="pt-footer-top-menu-ul-li"><a class="" href="">Blog</a></li>
                                   <li class="pt-footer-top-menu-ul-li"><a class="" href="">Events</a></li>
                                   <li class="pt-footer-top-menu-ul-li"><a class="" href="">Gallery</a></li>
                                   <li class="pt-footer-top-menu-ul-li"><a class="" href="">FAQs</a></li>
                                   <li class="pt-footer-top-menu-ul-li"><a class="" href="">Contact</a></li>
                               </ul>
                           </div>
                       </div>
                       <div class="col-md-3 pt-footer-top-app-col">
                           <div class="pt-footer-top-app">
                               <h5 class="pt-footer-top-app-title">Download our app</h5>
                               <!-- Google PlayStore -->
                               <a class="pt-google-play" href="#">
                                   <svg class="pt-playstore-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                       viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve">
                                       <g>
                                           <path style="fill:#32BBFF;" d="M382.369,175.623C322.891,142.356,227.427,88.937,79.355,6.028
                                               C69.372-0.565,57.886-1.429,47.962,1.93l254.05,254.05L382.369,175.623z"/>
                                           <path style="fill:#32BBFF;" d="M47.962,1.93c-1.86,0.63-3.67,1.39-5.401,2.308C31.602,10.166,23.549,21.573,23.549,36v439.96
                                               c0,14.427,8.052,25.834,19.012,31.761c1.728,0.917,3.537,1.68,5.395,2.314L302.012,255.98L47.962,1.93z"/>
                                           <path style="fill:#32BBFF;" d="M302.012,255.98L47.956,510.035c9.927,3.384,21.413,2.586,31.399-4.103
                                               c143.598-80.41,237.986-133.196,298.152-166.746c1.675-0.941,3.316-1.861,4.938-2.772L302.012,255.98z"/>
                                       </g>
                                       <path style="fill:#2C9FD9;" d="M23.549,255.98v219.98c0,14.427,8.052,25.834,19.012,31.761c1.728,0.917,3.537,1.68,5.395,2.314
                                           L302.012,255.98H23.549z"/>
                                       <path style="fill:#29CC5E;" d="M79.355,6.028C67.5-1.8,53.52-1.577,42.561,4.239l255.595,255.596l84.212-84.212
                                           C322.891,142.356,227.427,88.937,79.355,6.028z"/>
                                       <path style="fill:#D93F21;" d="M298.158,252.126L42.561,507.721c10.96,5.815,24.939,6.151,36.794-1.789
                                           c143.598-80.41,237.986-133.196,298.152-166.746c1.675-0.941,3.316-1.861,4.938-2.772L298.158,252.126z"/>
                                       <path style="fill:#FFD500;" d="M488.45,255.98c0-12.19-6.151-24.492-18.342-31.314c0,0-22.799-12.721-92.682-51.809l-83.123,83.123
                                           l83.204,83.205c69.116-38.807,92.6-51.892,92.6-51.892C482.299,280.472,488.45,268.17,488.45,255.98z"/>
                                       <path style="fill:#FFAA00;" d="M470.108,287.294c12.191-6.822,18.342-19.124,18.342-31.314H294.303l83.204,83.205
                                           C446.624,300.379,470.108,287.294,470.108,287.294z"/>
                                       <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                                   </svg>
                                   <div class="pt-playstore-text">
                                       <p class="pt-playstore-title">Get it on</p>
                                       <p class="pt-playstore-sub-title">Google Play</p>
                                   </div>
                               </a>
                               <!-- Apple PlayStore -->
                               <a class="pt-applestore" href="#">
                                   <svg class="pt-apple-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512">
                                       <g>
                                           <path d="M185.255,512c-76.201-0.439-139.233-155.991-139.233-235.21c0-129.404,97.075-157.734,134.487-157.734   c16.86,0,34.863,6.621,50.742,12.48c11.104,4.087,22.588,8.306,28.975,8.306c3.823,0,12.832-3.589,20.786-6.738   c16.963-6.753,38.071-15.146,62.651-15.146c0.044,0,0.103,0,0.146,0c18.354,0,74.004,4.028,107.461,54.272l7.837,11.777   l-11.279,8.511c-16.113,12.158-45.513,34.336-45.513,78.267c0,52.031,33.296,72.041,49.292,81.665   c7.061,4.248,14.37,8.628,14.37,18.208c0,6.255-49.922,140.566-122.417,140.566c-17.739,0-30.278-5.332-41.338-10.034   c-11.191-4.761-20.845-8.862-36.797-8.862c-8.086,0-18.311,3.823-29.136,7.881C221.496,505.73,204.752,512,185.753,512H185.255z"/>
                                           <path d="M351.343,0c1.888,68.076-46.797,115.304-95.425,112.342C247.905,58.015,304.54,0,351.343,0z"/>
                                       </g>
                                   </svg>
                                   <div class="pt-apple-text">
                                       <p class="pt-apple-title">Download on the</p>
                                       <p class="pt-apple-sub-title">AppStore</p>
                                   </div>
                               </a>
                               <!-- Complete PlayStore -->
                           </div>
                       </div>
                       <div class="col-md-3 pt-footer-top-address-col">
                           <div class="pt-footer-top-address">
                               <div class="pt-footer-address">
                                   <i class="fas fa-map-marker-alt"></i>
                                   <div class="pt-footer-address-detail">
                                       <p class="pt-footer-address-location">Your Location</p>
                                       <p class="pt-footer-address-one">Address Line 1</p>
                                       <p class="pt-footer-address-two">Address Line 2</p>
                                   </div>
                               </div>
                               <div class="pt-footer-address-mobile">
                                   <i class="fas fa-phone-alt"></i>
                                   <p class="pt-footer-number">+000 92938</p>
                               </div>
                               <div class="pt-footer-email">
                                   <i class="fas fa-envelope"></i>
                                   <p class="pt-footer-user-email">mail@example.com</p>
                               </div>
                           </div>
                       </div>
                   </div> <!-- row closing -->
               </div>
               <div class="container-fluid pt-footer-bottom-sec">
                   <div class="container">
                       <div class="row pt-footer-bottom">
                           <div class="col-md-12">
                               <div class="pt-footer-copyright">
                                   <div class="pt-footer-social-icons">
                                       <a class="pt-footer-facebook" href="#"><i class="fab fa-facebook"></i></a>
                                       <a class="pt-footer-twitter" href="#"><i class="fab fa-twitter"></i></a>
                                       <a class="pt-footer-instagram" href="#"><i class="fab fa-instagram"></i></a>
                                       <a class="pt-footer-youtube" href="#"><i class="fab fa-youtube"></i></a>
                                   </div>
                                   <p class="pt-footer-copyright-p">All Rights Reserved</p>
                               </div>
                           </div>
                       </div>
                   </div>

               </div>
           </div>
       </footer>
   </div>
</template>

<style>

</style>