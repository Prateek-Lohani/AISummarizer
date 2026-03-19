import {logo} from '../assets'

const Hero = () => {
  return (
    <header className='w-full px-6 py-4 flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="Synapse logo" className='object-contain' />
        <button
          type='button'
          onClick={() => window.open('https://github.com/Prateek-Lohani')}
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      {/* Badge */}
      <div className='px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-sm font-medium tracking-wide'>
        ✦ Powered by OpenAI GPT-4
      </div>

      <h1 className='head_text text-center'>
        Read Less. <br className='max-md:hidden' />
        <span className='orange_gradient'>Understand More.</span>
      </h1>

      <h2 className='desc text-center'>
        Synapse turns any article — no matter how long — into a sharp, 
        digestible summary in seconds. Paste a URL and let GPT-4 do the reading.
      </h2>

      <p className=' text-sm text-gray-400 tracking-wide'>
        Free to use · Open source · No sign-up required
      </p>
    </header>
  )
}

export default Hero