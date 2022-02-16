import Swal from 'sweetalert2'

export const alert = (title, text) => {
  Swal.fire({
    title: title,
    text: text,
    icon: 'error',
    confirmButtonText: 'Continuar'
  })
}
