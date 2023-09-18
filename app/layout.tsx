import Sidebar from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import SuperbaseProvider from '@/providers/SuperbaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import getSongsByUserId from '@/actions/getSongsByUserId'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Listen to your favourite music anytime,anywhere',
}
export const revalidate = 0;

export default  async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userSongs = await getSongsByUserId();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
        <SuperbaseProvider>
          <UserProvider>
            <ModalProvider/>
        <Sidebar songs={userSongs}>
        {children}
        </Sidebar>
        </UserProvider>
        </SuperbaseProvider>
        
        </body>
    </html>
  )
}
