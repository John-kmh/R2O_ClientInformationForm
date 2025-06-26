import Swal from 'sweetalert2'

export function showSuccessAlert(message = 'Submitted successfully!') {
  Swal.fire({
    title: 'Success',
    text: message,
    icon: 'success',
    confirmButtonText: 'OK',
  })
}

export function showErrorAlert(message = 'Something went wrong.') {
  Swal.fire({
    title: 'Error',
    text: message,
    icon: 'error',
    confirmButtonText: 'Try Again',
  })
}