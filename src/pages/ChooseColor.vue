<template>
  <BaseFrontFlowLayout>
    <section class="choose-color-wrap p-sm-2 p-lg-4">
      <div class="m-container">
        <div class="m-row">
          <div class="m-col-12 m-col-md-3">
            <div class="title-box">
              <h2>Choose Colour palette for your website</h2>
            </div>
            <p class="mt-sm-3 mt-lg-2">
              Select any of the below process to create your website Lorem Ipsum
              is simply dummy text of the printing and typesetting industry dummy
              text of the.
            </p>
          </div>
          <div class="m-col-12 m-col-md-4" v-if="selectedLogo">
              <div class="logo-color-wrap">
                  <div class="logo-box-wrap">
                      <h4>Your Logo</h4>
                      <div class="choosen-logo">
                          <img :src="userProjectInfo.logo" alt="">
                      </div>
                  </div>
              </div>
          </div>
          <div class="m-col-12 m-col-md-5">
              <div class="color-picker-box">
                 <h4 class="card-title">Color Picker</h4>
                <h6 class="card-subtitle">
                  Pick primary color to generate palette
                </h6>
                <p class="card-text text-center"></p>
                <div id="rgbValue"></div>
                  <div
                    class="colorpicker"
                    id="collorpicker_843"
                    style="display: block; position: relative"
                  >
                    <div
                      class="colorpicker_color"
                      style="background-color: rgb(255, 0, 0)"
                    >
                      <div>
                        <div style="left: 22px; top: 90px"></div>
                      </div>
                    </div>
                    <div class="colorpicker_hue">
                      <div style="top: 150px"></div>
                    </div>
                    <div
                      class="colorpicker_new_color"
                      style="background-color: rgb(102, 87, 87)"
                    ></div>
                    <div
                      class="colorpicker_current_color"
                      style="background-color: rgb(255, 0, 0)"
                    ></div>
                    <div class="colorpicker_hex">
                      <input type="text" maxlength="6" size="6" />
                    </div>
                    <div class="colorpicker_rgb_r colorpicker_field">
                      <input type="text" maxlength="3" size="3" /><span></span>
                    </div>
                    <div class="colorpicker_rgb_g colorpicker_field">
                      <input type="text" maxlength="3" size="3" /><span></span>
                    </div>
                    <div class="colorpicker_rgb_b colorpicker_field">
                      <input type="text" maxlength="3" size="3" /><span></span>
                    </div>
                    <div class="colorpicker_hsb_h colorpicker_field">
                      <input type="text" maxlength="3" size="3" /><span></span>
                    </div>
                    <div class="colorpicker_hsb_s colorpicker_field">
                      <input type="text" maxlength="3" size="3" /><span></span>
                    </div>
                    <div class="colorpicker_hsb_b colorpicker_field">
                      <input type="text" maxlength="3" size="3" /><span></span>
                    </div>
                    <div class="colorpicker_submit"></div>
                  </div>
              </div>
          </div>
        </div>
        <div class="m-row justify-content-center" v-if="selected_colors.length">
            <div class="m-col-6">
               <div class="color-shadae-box">
                    <p class="text">Color generated from your logo</p>
                    <div class="d-flex">
                      <span v-for="(color, i) in selected_colors" :key="i" class="bl" :style="{ backgroundColor: color }" />
                    </div>
              </div>
            </div>
        </div>

        <!-- new color pellette end -->
        <div class="m-row">
          <div class="m-col-12 m-col-md-6 m-col-lg-6">
            <div class="pointer-btn back">
              <router-link :to="{ name:'business_form' }">
                <div class="pointer">
                  <img src="image/arrow.svg" alt="" srcset="" />
                </div>
              </router-link>
            </div>
          </div>
          <div class="m-col-12 m-col-md-6 m-col-lg-6 text-sm-left text-lg-right">
              <router-link v-if="!selectedLogo" :to="{name: 'fonts'}" class="skip-btn mt-sm-1 mt-md-2 mt-lg-2">skip</router-link>
              <a href="#" @click.prevent="submit_choosed_color" class="m-btn mt-sm-1 mt-md-2 mt-lg-2 ">
                Next <span class="icon-box"><div class="triangle-icon"></div> </span>
              </a>
          </div>
        </div>
      </div>
    </section>
  </BaseFrontFlowLayout>
</template>

<script>
import '../../public/color/js/jquery.js'
import '../../public/color/js/colorpicker.js'
import '../../public/color/js/eye.js'
import '../../public/color/js/utils.js'
import '../../public/color/js/layout.js'
import BaseFrontFlowLayout from '../layout/BaseFrontFlowLayout.vue'
import {mapState, mapGetters} from 'vuex';

export default {
    name: "ChooseColor",
    components: {
      BaseFrontFlowLayout
    },
  data () {
    return ({
      colors: '',
      selected_colors: [],
      selected_color: ''
    })
  },
  computed: {
    ...mapState('frontflow', ['userProjectInfo']),
    ...mapGetters('frontflow', ['selectedLogo'])
  },
  mounted () {
    var vm = this;
    const response = localStorage.getItem('userProjectInfo')
    const userProjectInfo = JSON.parse(response)

this.selected_color = userProjectInfo.selected_color
    $('.colorpicker').ColorPicker({
      color: userProjectInfo.selected_color,
      flat: true,
      onChange: function (hsb, hex, rgb) {
          vm.selected_color = `#${hex}`
          vm.generateOnSubmit(hsb.h,hsb.s,hsb.b);
      },
    });

    this.selected_colors = userProjectInfo.selected_colors
  },
  methods: {
    generateOnSubmit(h,s,b){
      var vm = this;
      var hsb_h =parseFloat(h);
      var hsb_s = parseFloat(s);
      var hsb_b = parseFloat(b);
      var color1 = [hsb_h,hsb_s,hsb_b];
      var color2 = [(hsb_h+210)%360,hsb_s,hsb_b];
      var color3 = [(hsb_h+150)%360,hsb_s,hsb_b];
      var color4 = [hsb_h,hsb_s,20];
      var color5 = [hsb_h,4,80];
      var hex1 = vm.hsbToHSLtoHex(color1);
      var hex2 = vm.hsbToHSLtoHex(color2);
      var hex3 = vm.hsbToHSLtoHex(color3);
      var hex4 = vm.hsbToHSLtoHex(color4);
      var hex5 = vm.hsbToHSLtoHex(color5);

      $('#color1').css('background', hex1);
      $('#color2').css('background', hex2);
      $('#color3').css('background', hex3);
      $('#color4').css('background', hex4);
      $('#color5').css('background', hex5);

      var colors = [hex1, hex2, hex3, hex4, hex5];
      colors['color1'] = hex1;
      colors['color2'] = hex2;
      colors['color3'] = hex3;
      colors['color4'] = hex4;
      colors['color5'] = hex5;
      sessionStorage.setItem("colors", JSON.stringify(colors));
      this.selected_colors = [...colors]
    },
    hsbToHSLtoHex(hsb_color){
      var vm = this;
      var h = hsb_color[0];
      var s = hsb_color[1];
      var b = hsb_color[2];

      // determine the lightness in the range [0,100]
      var l = (2 - s / 100) * b / 2;

      // store the HSL components
      s = s * b / (l < 50 ? l * 2 : 200 - l * 2);

      // correct a division-by-zero error
      if (isNaN(s)) s = 0;

      return vm.HSLToHex(h,s,l);

    },
    HSLToHex(h,s,l) {
      s /= 100;
      l /= 100;

      let c = (1 - Math.abs(2 * l - 1)) * s,
          x = c * (1 - Math.abs((h / 60) % 2 - 1)),
          m = l - c/2,
          r = 0,
          g = 0,
          b = 0;

      if (0 <= h && h < 60) {
        r = c; g = x; b = 0;
      } else if (60 <= h && h < 120) {
        r = x; g = c; b = 0;
      } else if (120 <= h && h < 180) {
        r = 0; g = c; b = x;
      } else if (180 <= h && h < 240) {
        r = 0; g = x; b = c;
      } else if (240 <= h && h < 300) {
        r = x; g = 0; b = c;
      } else if (300 <= h && h < 360) {
        r = c; g = 0; b = x;
      }
      // Having obtained RGB, convert channels to hex
      r = Math.round((r + m) * 255).toString(16);
      g = Math.round((g + m) * 255).toString(16);
      b = Math.round((b + m) * 255).toString(16);

      // Prepend 0s, if necessary
      if (r.length == 1)
        r = "0" + r;
      if (g.length == 1)
        g = "0" + g;
      if (b.length == 1)
        b = "0" + b;

      var hex = "#" + r + g + b;
      return hex;
    },
    saveColor(){
      axios.post('api/save-color',{colors:sessionStorage.getItem('colors'),website_id:sessionStorage.getItem('website_id')})
      .then((res)=>{
        if(res.data.message=='success'){
          this.$router.push({name:'Fonts'});
        }
      })
    },

    chooseColorNext(){
      this.$router.push({name:'fonts'});
    },
    chooseColorBack(){
      this.$router.push({name:'business_form'});
    },
    submit_choosed_color() {
      this.$store.commit('frontflow/SET_USER_PROJECT_INFO', {
          ...this.userProjectInfo,
          selected_colors: this.selected_colors,
          selected_color: this.selected_color
      })
     localStorage.setItem('userProjectInfo', JSON.stringify(this.userProjectInfo))
     this.$router.push({name: 'fonts'})
    }

  }
}
</script>

<style scoped>

@import '../../public/color/css/colorpicker.css';
/*============== BODY BG SECTION ===========*/

.d-flex {
  display: flex;
}

.color-shadae-box p{margin:30px 0;}
.color-shadae-box span{display: block; margin-bottom: 10px;}
.color-shadae-box img{max-width: 100%;width: 200px;}

.color-shadae-box span {
    display: inline;
    width: 50px;
    height: 50px;
}

.color-shadae-box span {
    display: block;
    margin-bottom: 10px;
}
.colorpicker {
  background-repeat: no-repeat;
}

.card-subtitle {
  padding: 6px 0;
}

.justify-content-center {
  justify-content: center;
}

.choosen-logo img {
  border-radius: 50%;
  height: 100px;
  object-fit: cover;
}

.hide {
  display: none;
}

.show {
  display: block;
}

</style>