import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h2 className='text-2xl font-bold'>Not Found</h2>
      <p className='text-gray-600'>Could not find requested resource</p>
      <Link href="/" className='text-blue-500 text-lg hover:underline'>Return Home</Link>
    </div>
  )
}