<script>
import BaseFrontFlowLayout from "@/layout/BaseFrontFlowLayout";
import FlashMessage from "@/components/FlashMessage";
import { AuthService } from "@/services/auth.service.js";
export default {
  name: "Otp",
  components: {
    BaseFrontFlowLayout,
    FlashMessage,
  },
  data() {
    return {
      otp1: "",
      otp2: "",
      otp3: "",
      otp4: "",
      otp5: "",
      otp6: "",
    };
  },
  methods: {
    async submitOTP() {
      try {
        const otpCodes = [
          this.otp1,
          this.otp2,
          this.otp3,
          this.otp4,
          this.otp5,
          this.otp6,
        ].join("");
        if(!otpCodes.length) return

        const { message } = await AuthService.verifyOTP({ otp: otpCodes });
        if (message) {
          this.$store.commit("toast/NEW", {
            type: "success",
            message: message,
          });
          setTimeout(() => {
            this.$store.commit("toast/CLEAR_LIST");
          }, 3000);
        }

        this.otp1 = "";
        this.otp2 = "";
        this.otp3 = "";
        this.otp4 = "";
        this.otp5 = "";
        this.otp6 = "";
        return this.$router.push({ name: 'login' })
      } catch (error) {
        if (error.message) {
          this.$store.commit("toast/NEW", {
            type: "error",
            message: error.message,
          });
          setTimeout(() => {
            this.$store.commit("toast/CLEAR_LIST");
          }, 3000);
          return;
        }

        if (error.status && error.status == 422) {
          this.validation.setMessages(error.errors);
          return;
        }
      }
    },
    handleInput(e) {
      const input = e.target;
      const value = input.value.trim()
      if (input.nextElementSibling && value) {
        input.nextElementSibling.focus();
      }
      if(e.inputType == 'deleteContentBackward') {
        input.previousElementSibling && input.previousElementSibling.focus();
      }
    },
    handlePaste(e) {
      const paste = e.clipboardData.getData("text").trim();
      this.otp1 = paste[0];
      this.otp2 = paste[1];
      this.otp3 = paste[2];
      this.otp4 = paste[3];
      this.otp5 = paste[4];
      this.otp6 = paste[5];
    },
  },
};
</script>

<template>
  <BaseFrontFlowLayout>
    <section class="p-sm-2 p-lg-4">
      <div class="m-container">
        <FlashMessage />
        <div class="title-box">
          <h2>Enter OTP for your account activation</h2>
        </div>
        <form
          name="verify"
          @submit.prevent="submitOTP"
          @input="handleInput($event)"
        >
          <div class="inputs">
            <input
              @paste="handlePaste($event)"
              type="text"
              v-model="otp1"
              name="n1"
              maxlength="1"
            />
            <input
              @paste="handlePaste($event)"
              type="text"
              v-model="otp2"
              name="n2"
              maxlength="1"
            />
            <input
              @paste="handlePaste($event)"
              type="text"
              v-model="otp3"
              name="n3"
              maxlength="1"
            />
            <input
              @paste="handlePaste($event)"
              type="text"
              v-model="otp4"
              name="n4"
              maxlength="1"
            />
            <input
              @paste="handlePaste($event)"
              type="text"
              v-model="otp5"
              name="n5"
              maxlength="1"
            />
            <input
              @paste="handlePaste($event)"
              type="text"
              v-model="otp6"
              name="n6"
              maxlength="1"
            />
          </div>
          <input type="submit" value="Verify" />
        </form>
      </div>
    </section>
  </BaseFrontFlowLayout>
</template>

<style scoped>
form {
  border: 1px solid black;
  padding: 20px;
  max-width: 500px;
  margin: 70px 0;
  margin-left: auto;
  margin-right: auto;
}

.inputs {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  margin-bottom: 10px;
}

.inputs > * {
  border: 1px solid black;
  width: 100%;
  padding: 20px;
  text-align: center;
  font-size: 20px;
  line-height: 1;
}

input[type="submit"] {
  background: #031f4b;
  color: white;
  font-size: 20px;
  padding: 20px;
  border: 0;
  width: 100%;
  text-align: center;
}

input[type="submit"]:focus {
  border-color: blue;
}
</style>