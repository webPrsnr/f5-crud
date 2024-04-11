import Toastify from 'toastify-js'
import toastStorage from './localstorage'

export default function showToast() {
  const config = getToastInfo()
  if (config) {
    Toastify({
      text: config.title,
      duration: 2000,
      newWindow: true,
      gravity: 'bottom',
      position: 'right',
      style: getToastStatus(config.status),
      callback: () => {
        toastStorage.removeToastInfo()
      },
    }).showToast()
  }
}

function getToastInfo() {
  return toastStorage.getToastInfo()
}

function getToastStatus(status) {
  switch (status) {
    case 'danger':
      return {
        background: 'rgba(239, 68, 68, 0.996)',
        color: 'rgb(248, 250, 252)',
      }
    case 'success':
      return {
        background: 'hsl(var(--primary))',
        color: 'hsl(var(--primary-foreground))',
      }
    default:
      return {
        background: 'rgb(241, 245, 249)',
        color: 'rgb(15, 23, 42)',
      }
  }
}
