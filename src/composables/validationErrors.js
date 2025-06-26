import { ref } from "vue";

const errors = ref([]);

export function errorFor(field) {
  const errorFor =
    null != errors.value && errors.value[field] ? errors.value[field] : null;

  return errorFor;
}