import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold">Coming Soon!</h1>
        <a href= "/" className="underline hover:underline-offset-4 mt-8 text-xl font-semibold text-blue-500 hover:text-blue-700">
          Go back home
        </a>
    </div>
  )
}