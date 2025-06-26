<template>
   <small v-if="vuelidateErrors" class="text-danger">
      <template v-if="vuelidateErrors">
         <p class="mb-0" v-for="vulidate_error of vuelidateErrors.errors" :key="vulidate_error.$uid">
            {{
               vulidate_error.$message.replace("Value", vuelidateErrors.value)
            }}
         </p>
      </template>
   </small>
</template>

<script>
export default {
   props: ["vuelidateErrors"],
};
</script>

<style>
.form.p-invalid~small>.text-danger {
   display: block;
}
</style>