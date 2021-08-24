<script>
import BaseFrontFlowLayout from "@/layout/BaseFrontFlowLayout";
import FlashMessage from "@/components/FlashMessage";
import Loader from "@/components/Loader";

import Validation from "@/services/Validation";
import { AuthService } from "@/services/auth.service";
export default {
  name: "ForgetPassword",
  components: {
    BaseFrontFlowLayout,
    FlashMessage,
    Loader,
  },
  data() {
    return {
      email: "",
      validation: new Validation(),
      frontValidations: [],
      isLoading: false,
    };
  },
  methods: {
    async submitEmail() {
      try {
        if (!this.email) {
          this.frontValidations.push("Email is required.");
        }
        if (this.frontValidations.length) {
          setTimeout(() => {
            this.frontValidations = [];
          }, 3000);
          return;
        }

        this.isLoading = true;

        const response = await AuthService.passwordReset({
          email: this.email,
        });
        console.log(response.response)

        if (response.message) {
          this.$store.dispatch("toast/setResponseMessage", {
            type: "success",
            message: response.message,
          });
        }
      } catch (error) {
        console.log(error)
        if (error.message) {
          this.$store.dispatch("toast/setResponseMessage", {
            type: "error",
            message: error.message,
          });
          return;
        }

        if (error.status && error.status == 422) {
          this.validation.setMessages(error.errors);
          return;
        }
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<template>
  <BaseFrontFlowLayout>
    <Loader v-if="isLoading" />
    <section v-else class="p-sm-2 p-lg-4">
      <div class="m-container">
        <FlashMessage />
        <div v-if="frontValidations.length" class="alert alert-error">
          <div v-for="(error, i) in frontValidations" :key="i">
            {{ error }}
          </div>
        </div>
        <div class="form-wrap">
          <div class="title-box">
            <h3>Enter your email for reset password</h3>
          </div>
          <div class="m-form mt-sm-2 mt-md-3 mt-lg-4">
            <form @submit.prevent="submitEmail">
              <div class="m-input-box">
                <input
                  type="email"
                  name="email"
                  v-model="email"
                  placeholder="Email"
                  class="m-input"
                />
                <div
                  class="validation-message"
                  v-text="validation.getMessage('email')"
                ></div>
              </div>
              <button type="submit" class="submit-btn mt-lg-3">
                <div class="pointer">
                  <span><img src="image/arrow.svg" alt="" /></span>
                </div>
                <span class="icon-box"
                  >Submit<i class="fa fa-caret-right" aria-hidden="true"></i
                ></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </BaseFrontFlowLayout>
</template>

<style>
</style>