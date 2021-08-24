<script>
export default {
  name: "BaseFont",
};
</script>
<template>
  <div class="font-list-wrapper">
    <div class="checlbox-wrap scrollbar">
      <div class="exp">
        <div class="checkbox">
          <form class="selectfont-list">
            <div>
              <input type="checkbox" id="check" name="check" value="" />
              <label for="check">
                <span
                  ><!-- This span is needed to create the "checkbox" element --></span
                >Selected font
              </label>
            </div>
          </form>
        </div>
      </div>

      <!--end of checkbox-->

      <div class="font-holder-box">
        <div class="box">
          <div class="fontlist-box">
            <h4>Montserrat</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div class="fontlist-box">
            <h4>Luxia</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <!-- end of box -->

        <h5 class="otherfont">Other font options</h5>

        <div class="box">
          <div class="fontlist-box">
            <h4>Din Alternate</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div class="fontlist-box">
            <h4>Belinda</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <!-- end of box -->
      </div>
      <!--end of font holder box-->
    </div>
  </div>
</template>

<style>
</style>