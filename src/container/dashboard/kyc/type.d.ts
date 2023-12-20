export interface IStateProps {
  documents: { key: string; label: string; value: string }[]
  fullName: string
  verificationId: string
  createdAt: string
  status: string
  id: string
  userId: string
  metamapStatus?: string
}
export type ValueProps = {
  comments?: string
  status?: string
  reason?: string
}
