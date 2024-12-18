import { Lightbulb, Loader2 } from 'lucide-react'
import * as React from 'react'

import { cn } from '../../lib/utils'
import { Button } from '../button'
import { Dialog, DialogContent, DialogTrigger } from '../dialog'

interface SimpleDialogProps {
  children: React.ReactNode
  title?: string
  trigger: React.ReactNode
  className?: string
  cancelText?: string
  confirmText?: string
  onConfirm?: () => Promise<void> | void
  isLoading?: boolean
  tips?: React.ReactNode | string
  variant?: 'default' | 'delete'
}

export function SimpleDialog({
  children,
  title,
  trigger,
  className,
  cancelText,
  confirmText,
  onConfirm,
  isLoading,
  tips,
  variant = 'default',
  ...props
}: SimpleDialogProps) {
  const [open, setOpen] = React.useState(false)

  const handleConfirm = async () => {
    if (onConfirm) {
      await onConfirm()
      setOpen(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={className} {...props}>
        {title && (
          <div className="mb-4 flex flex-col space-y-1.5 text-center sm:text-left">
            <h3 className={cn('text-lg font-semibold', variant === 'delete' && 'text-red-600')}>
              {title}
            </h3>
          </div>
        )}
        <div className={cn(variant === 'delete' && 'text-red-600/90')}>{children}</div>
        <div className="mt-4 flex flex-col-reverse sm:flex-row sm:justify-end sm:items-center sm:space-x-4">
          {tips && (
            <div
              className={cn(
                'mb-2 sm:mb-0 sm:mr-auto text-sm flex items-center gap-1.5',
                typeof tips === 'string' && 'text-gray-600',
              )}
            >
              {typeof tips === 'string' && <Lightbulb className="h-4 w-4 text-yellow-500" />}
              {tips}
            </div>
          )}
          <div className="flex flex-col-reverse sm:flex-row sm:space-x-2">
            {cancelText && (
              <Button variant="outline" onClick={() => setOpen(false)} disabled={isLoading}>
                {cancelText}
              </Button>
            )}
            {confirmText && (
              <Button
                onClick={handleConfirm}
                disabled={isLoading}
                className="relative min-w-[80px]"
                variant={variant === 'delete' ? 'destructive' : 'default'}
              >
                <span className={cn('transition-opacity', isLoading ? 'opacity-0' : 'opacity-100')}>
                  {confirmText}
                </span>
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
                )}
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
