import { helpers } from '@vuelidate/validators'

export function notSameAs(otherFieldGetter) {
  return helpers.withMessage(
    'Second phone number must be different from main phone number.',
    helpers.withParams(
      { type: 'notSameAs' },
      (value, vm) => value !== otherFieldGetter(vm)
    )
  )
}