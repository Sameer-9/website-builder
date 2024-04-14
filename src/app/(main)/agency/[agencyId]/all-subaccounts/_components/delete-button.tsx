'use client'
import { useToast } from '@/components/ui/use-toast'
import {
  deleteSubAccount,
  getSubaccountDetails,
  saveActivityLogsNotification,
} from '@/lib/queries'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
  subaccountId: string
}

const DeleteButton = ({ subaccountId }: Props) => {
  const router = useRouter()
  const { toast } = useToast()
  return (
    <div
      className="text-white"
      onClick={async () => {
        const response = await getSubaccountDetails(subaccountId)
        await saveActivityLogsNotification({
          agencyId: undefined,
          description: `Deleted a subaccount | ${response?.name}`,
          subaccountId,
        })
        await deleteSubAccount(subaccountId)
        toast({
          description: 'Subaccount Deleted Successfully!',
        })
        router.refresh()
      }}
    >
      Delete Sub Account
    </div>
  )
}

export default DeleteButton