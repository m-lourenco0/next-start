import Image from 'next/image';

import { auth } from '@/lib/auth';

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div>
      {session.user.image ? (
        <Image
          src={session.user.image}
          alt="User Avatar"
          width={50}
          height={50}
        />
      ) : (
        <div>Image not available</div>
      )}
    </div>
  );
}
