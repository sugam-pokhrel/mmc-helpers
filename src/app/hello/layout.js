
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CUPIDS',
  description: 'HEY CUPIDS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="bg-gray-100 min-h-screen">
{children}
            
           </div>
        </body>
    </html>
  )
}