import { ref } from 'vue'

export function useRecaptcha() {
  const siteKey = '6Lda43ArAAAAAF-nSOJx0G3z4GSidaZmanrqjpng' 
  const captchaVerified = ref(false)

  function onCaptchaSuccess() {
    captchaVerified.value = true
  }

  function loadRecaptcha() {
    if (document.querySelector('script[src*="recaptcha/api.js"]')) return 

    const script = document.createElement('script')
    script.src = 'https://www.google.com/recaptcha/api.js'
    script.async = true
    script.defer = true
    document.head.appendChild(script)
  }

  return {
    siteKey,
    captchaVerified,
    onCaptchaSuccess,
    loadRecaptcha
  }
}
