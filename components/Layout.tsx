import Sidebar from './Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 p-8 flex items-center justify-center">
        <div className="w-full max-w-[660px] mt-[10%]">
          {children}
        </div>
      </main>
    </div>
  )
}
