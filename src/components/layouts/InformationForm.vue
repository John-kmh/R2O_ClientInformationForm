<template>
  <div class="container-fluid py-5">
    <div class="card shadow-sm rounded-4 mx-auto " style="max-width: 720px; border: none; background-color: #ffffff;">
      <div class="text-center w-85 m-auto mt-5 py-2">
        <span class="logo-lg">
          <img src="@/assets/images/logo/r2o_logo.png" class="img-fluid" alt="logo" width="280" height="60" />
        </span>
      </div>
      <div class="card-body p-5">
        <h3 class="card-title mb-4">Client's Information Form</h3>
        <p class="mb-4">(အောက်ပါအချက်အလက်များကိုပြည့်စုံစွာဖြည့်ရန်လိုအပ်ပါသည်။ <span class="required-asterisk">*</span>)</p>

        <form @submit.prevent="surveyForm">
          <div class="mb-4">
            <label for="category" class="form-label">Type of Product Category <span class="required-asterisk">*</span> (ပစ္စည်းအမျိုးအစား)</label>
            <select id="category" class="form-select" v-model="form.category" :class="{'p-invalid': v$.category.$error || errorFor('category')}">
              <option disabled value="">Choose product category</option>
              <option value="Phone">Phone</option>
              <option value="BW">Home Electronics</option>
              <option value="BW">Furniture</option>
              <option value="Moto">Motorcycle</option>
              <option value="Moto">E-bike</option>
              <option value="Moto">3 Wheels</option>
            </select>
            <v-errors :vuelidateErrors="{
                errors: v$.category.$errors,
                value: 'category',
            }"></v-errors>
          </div>

          <div class="mb-4">
            <label for="price" class="form-label">Product price looking for <span class="required-asterisk">*</span> (စျေးနှုန်း)</label>
            <select id="price" class="form-select" v-model="form.price" :class="{'p-invalid': v$.price.$error || errorFor('price')}">
              <option disabled value="">Choose price</option>
              <option value="250,000 - 500,000">250,000 - 500,000</option>
              <option value="600,000 - 1,000,000">600,000 - 1,000,000</option>
              <option value="1,100,000 - 2,000,000">1,100,000 - 2,000,000</option>
              <option value="2,100,000 - 3,000,000">2,100,000 - 3,000,000</option>
              <option value="3,100,000 - 4,000,000">3,100,000 - 4,000,000</option>
              <option value="4,100,000 - 5,000,000">4,100,000 - 5,000,000</option>
              <option value="5,100,000 - 6,000,000">5,100,000 - 6,000,000</option>
              <option value="6,100,000 - 7,000,000">6,100,000 - 7,000,000</option>
              <option value="7,100,000 - 8,000,000">7,100,000 - 8,000,000</option>
              <option value="8,100,000 - 9,000,000">8,100,000 - 9,000,000</option>
              <option value="9,100,000 - 10,000,000">9,100,000 - 10,000,000</option>
              <option value="Above 10,000,000">Above 10,000,000</option>
            </select>
            <v-errors :vuelidateErrors="{
                errors: v$.price.$errors,
                value: 'price',
            }"></v-errors>
          </div>
          
          <div class="mb-4">
            <label for="period" class="form-label">Installation Months <span class="required-asterisk">*</span> (ငှါးရမ်းဝယ်ယူမည့် ကာလအပိုင်းအခြား)</label>
            <select id="period" class="form-select" v-model="form.period" :class="{'p-invalid': v$.period.$error || errorFor('period')}">
              <option disabled value="">Choose installation months</option>
              <option value="6 Month">6 Month</option>
              <option value="9 Month">9 Month</option>
              <option value="12 Month">12 Month</option>
              <option value="18 Month">18 Month</option>
            </select>
            <v-errors :vuelidateErrors="{
                errors: v$.period.$errors,
                value: 'period',
            }"></v-errors>
          </div>

          <div class="mb-4">
            <label for="name" class="form-label">Customer Name <span class="required-asterisk">*</span> (အမည်)</label>
            <input type="text" id="name" class="form-control" v-model="form.name" placeholder="Enter your name" :class="{'p-invalid': v$.name.$error || errorFor('name')}">
            <v-errors :vuelidateErrors="{
                errors: v$.name.$errors,
                value: 'name',
            }"></v-errors>
          </div>
          
          <div class="mb-4">
            <label for="nrc" class="form-label">NRC <span class="required-asterisk">*</span> (မှတ်ပုံတင်နံပါတ်)</label>
            <input type="text" id="nrc" class="form-control" v-model="form.nrc" placeholder="Enter your NRC number" :class="{'p-invalid': v$.nrc.$error || errorFor('nrc')}">
            <v-errors :vuelidateErrors="{
                errors: v$.nrc.$errors,
                value: 'nrc',
            }"></v-errors>
          </div>

          <div class="mb-4">
            <label for="gender" class="form-label">Gender <span class="required-asterisk">*</span> (ကျား / မ)</label>
            <select id="gender" class="form-select" v-model="form.gender" :class="{'p-invalid': v$.gender.$error || errorFor('gender')}">
              <option disabled value="">Choose your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <v-errors :vuelidateErrors="{
                errors: v$.gender.$errors,
                value: 'gender',
            }"></v-errors>
          </div>

          <div class="mb-4">
            <label for="phone" class="form-label">Contact Number <span class="required-asterisk">*</span> (ဆက်သွယ်ရန်ဖုန်းနံပါတ်)</label>
            <input type="text" id="phone" class="form-control" v-model="form.phone" placeholder="Enter your phone number" :class="{'p-invalid': v$.phone.$error || errorFor('phone')}">
            <v-errors :vuelidateErrors="{
                errors: v$.phone.$errors,
                value: 'phone',
            }"></v-errors>
            <label for="secPhone" class="form-label mt-4">Other Contact Number (အခြားဆက်သွယ်ရန်ဖုန်းနံပါတ်)</label>
            <input type="text" id="secPhone" class="form-control" v-model="form.secPhone" placeholder="Enter other phone number">
          </div>

          <div class="mb-4">
            <label for="address" class="form-label">Current Address <span class="required-asterisk">*</span> (လက်ရှိနေရပ်လိပ်စာ)</label>
            <input type="text" id="address" class="form-control" v-model="form.address" placeholder="Enter your current address" :class="{'p-invalid': v$.address.$error || errorFor('address')}">
            <v-errors :vuelidateErrors="{
                errors: v$.address.$errors,
                value: 'address',
            }"></v-errors>
          </div>

          <div class="mb-4">
            <label for="remark" class="form-label">Remark (မှတ်ချက်/အကြံပြုချက်)</label>
            <textarea class="form-control" v-model="form.remark" rows="4" placeholder="Your suggestion..."></textarea>
          </div>
          
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary rounded-pill">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { errorFor } from "@/composables/validationErrors";
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { showSuccessAlert, showErrorAlert } from '@/composables/alert'

const form = reactive({
  category: '',
  price: '',
  period: '',
  name: '',
  nrc: '',
  gender: '',
  phone: '',
  secPhone: '',
  address: '',
  remark: ''
})

const rules = {
      category: { required },
      price: { required },
      period: { required },
      name: { required },
      nrc: { required },
      gender: { required },
      phone: { required },
      address: { required },
    }

const v$ = useVuelidate(rules, form);

async function surveyForm() {
  const isFormCorrect = await v$.value.$validate() 

  if (!isFormCorrect) {
    showErrorAlert('Please fill the required fields.')
    return
  }

  showSuccessAlert('Your information has been received!')
  console.log('Form Submitted:', form)
}



</script>

<style scoped>

.container-fluid {
  background-color: #EEF7FF;
}

.required-asterisk {
  color: red;
}

.form-select:focus,
.form-select:hover {
   background-color: #EEF7FF;
}
</style>


