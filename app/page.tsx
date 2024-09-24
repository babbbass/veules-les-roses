import React from "react"
import Image from "next/image"
import Link from "next/link"

const HomePage = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <header className='bg-white shadow-md'>
        <div className='container mx-auto flex items-center justify-between p-4'>
          <div className='flex items-center'>
            <Image
              src='/logo.jpg'
              alt='Veules les Roses Logo'
              width={50}
              height={50}
              className='mr-3'
            />
            <h1 className='text-2xl font-bold text-indigo-800'>
              76980 - <span className='text-pink-500'>Veules les Roses</span>
            </h1>
          </div>

          <div className='flex space-x-4'>
            <Link href='/'>
              <span className='flex items-center text-gray-600 hover:text-gray-800'>
                <Image
                  src='/flags/fr.png'
                  alt='French Flag'
                  width={20}
                  height={20}
                  className='mr-1'
                />
                FR
              </span>
            </Link>
            <Link href='/en'>
              <span className='flex items-center text-gray-600 hover:text-gray-800'>
                <Image
                  src='/flags/en.png'
                  alt='English Flag'
                  width={20}
                  height={20}
                  className='mr-1'
                />
                EN
              </span>
            </Link>
            <Link href='/de'>
              <span className='flex items-center text-gray-600 hover:text-gray-800'>
                <Image
                  src='/flags/de.png'
                  alt='German Flag'
                  width={20}
                  height={20}
                  className='mr-1'
                />
                DE
              </span>
            </Link>
          </div>
        </div>
      </header>
      <section
        className='my-5 container flex justify-center items-center w-full mx-auto py-8 text-3xl font-bold text-slate-50  bg-cover bg-center h-96'
        style={{
          backgroundImage: "url('/veules-les-roses-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></section>

      <section className='container mx-auto py-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          <div
            className='text-white overflow-hidden rounded-lg shadow-lg hover:text-pink-100 hover:scale-105 text-3xl hover:text-4xl duration-200 flex items-end justify-center h-80 pb-14'
            style={{
              backgroundImage: "url('/photo1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className='font-bold'>Office du Tourisme</span>
          </div>
          <div
            className='text-white overflow-hidden rounded-lg shadow-lg hover:text-pink-100 hover:scale-105 text-3xl hover:text-4xl duration-200 flex items-end justify-center h-80 pb-14'
            style={{
              backgroundImage: "url('/photo2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className='font-bold'>Commerces</span>
          </div>
          <div
            className='text-white overflow-hidden rounded-lg shadow-lg hover:scale-105 text-3xl hover:text-4xl hover:text-pink-100 duration-200 flex items-end justify-center h-80 pb-14'
            style={{
              backgroundImage: "url('/photo3.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className='font-bold italic'>Horaires des marées</span>
          </div>
          <div
            className='text-white overflow-hidden rounded-lg shadow-lg hover:text-pink-100 hover:scale-105 text-3xl hover:text-4xl duration-200 flex items-end justify-center h-80 pb-14'
            style={{
              backgroundImage: "url('/photo4.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className='font-bold'>Office du Tourisme</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
