import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
// import { useToast } from "@/components/ui/toast"
// import { useToast } from "@/components/ui/toast"
// If useToast is defined elsewhere, import it from the correct path, e.g.:
// import { useToast } from "@/hooks/useToast"
// Or, if you need a quick mock for now, you can define a placeholder hook like this:
const useToast = () => ({ toasts: [] });

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
