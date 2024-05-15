import { SignIn } from '@/components/sign-in';
import { ThemeToggle } from '@/components/theme-toggle';
import UserAvatar from '@/components/user-avatar';

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <SignIn />
      <UserAvatar />
    </>
  );
}
