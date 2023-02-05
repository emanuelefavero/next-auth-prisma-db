// * NEXTAUTH
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

export default function Page() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className='container'>
        <Image
          src={session.user?.image || ''}
          alt='User Image'
          width={100}
          height={100}
        />
        Signed in as <b>{session.user?.name}</b>
        {/* SIGN OUT */}
        <button onClick={() => signOut()} className='sign-out'>
          Sign out
        </button>
      </div>
    )
  }
  return (
    <div className='container'>
      Not signed in
      {/* SIGN IN */}
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  )
}
