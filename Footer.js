import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare,
} from 'react-icons/fa'
export default function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 fap-8 text-black-300'>
    <div>
        <h1 className='w-full text-3xl font-bold text-black-300'>LIBRARY</h1>
        <p className='py-4'>
        “To create an infrastructure for experts to get the holistic view of a particular subject thus, perpetuating the flow of ‘Samyag Jnan’ in masses & for generations to come.”
        
        </p>
        <div className='flex gap-2 md:w-{75%} my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
    </div>

    <div className='lg:col-span-2 flex justify-between ml-4'>
        <div>
            <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Insights: AI</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Support</h6>
            <ul>
                <li className='py-2 text-sm'>Pricing</li>
                <li className='py-2 text-sm'>Documentation</li>
                <li className='py-2 text-sm'>Guides</li>
                <li className='py-2 text-sm'>API Status</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Company</h6>
            <ul>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>Blog</li>
                <li className='py-2 text-sm'>Jobs</li>
                <li className='py-2 text-sm'>Press</li>
                <li className='py-2 text-sm'>Careers</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Legal</h6>
            <ul>
                <li className='py-2 text-sm'>Terms & Condition</li>
                <li className='py-2 text-sm'>Privacy Policy</li>
                <li className='py-2 text-sm'>Claim</li>
            </ul>
        </div>
    </div>
</div>
  )
}
