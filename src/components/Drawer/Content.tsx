/* eslint-disable prettier/prettier */
import {
  DialogContent as DialogPrimitiveContent,
  DialogContentProps as DialogPrimitiveContentProps,
} from '@radix-ui/react-dialog'

export const DialogContent = (props: DialogPrimitiveContentProps) => {
  return (
    <DialogPrimitiveContent
      className="data-[state=open]:animate-openDrawer fixed right-0 top-0 h-screen w-[660px]  bg-gray-800 outline-none transition-all"
      {...props}
    />
  )
}
