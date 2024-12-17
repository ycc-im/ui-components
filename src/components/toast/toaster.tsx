import { Toast as ToastComponent, ToastProvider, ToastViewport } from './Toast'
import { useToast } from './use-toast'

type ToastProps = React.ComponentProps<typeof ToastComponent>

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function (toast: ToastProps) {
        return (
          <ToastComponent key={toast.id} {...toast}>
            {toast.title}
          </ToastComponent>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
