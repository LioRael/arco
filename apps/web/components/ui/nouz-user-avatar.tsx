import { UserIcon } from 'lucide-react'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@nouz/design-system/components/ui/avatar'

interface UserAvatarProps extends React.ComponentProps<typeof Avatar> {
  src?: string
}

const NouzUserAvatar = ({ src, ...props }: UserAvatarProps) => {
  return (
    <Avatar {...props}>
      <AvatarFallback>
        <UserIcon className="size-4" />
      </AvatarFallback>
      <AvatarImage src={src} />
    </Avatar>
  )
}

export { NouzUserAvatar }
