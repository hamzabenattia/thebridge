
function Contact() {
  return (
    <div className='my-10 p-5 items-center m-auto bg-orange-300 flex flex-col justify-center rounded-3xl w-fit'>
        <h1 className='font-bold text-2xl'>Contact Us</h1>
        <form className='flex flex-col w-96 font-semibold'>
            <label htmlFor="name">
                NAME
            </label>
            <input  className="border-2 border-orange-200  bg-orange-200 rounded-2xl px-4 py-1"  type="text" id="name" name="name" placeholder='Jiara Martins'/>

            <label htmlFor="email">
                EMAIL
            </label>
            <input  className='border-2 border-orange-200  bg-orange-200 rounded-2xl px-4 py-1' type="text" id="email" name="email" placeholder="exemple@email.com"/>
            <label htmlFor="message">
                MESSAGE
            </label>
            <textarea className='border-2 border-orange-200  bg-orange-200 rounded-2xl px-4 py-1' id="message" name="message" placeholder="Write your message here" />
            <button className='rounded-xl bg-[#AF2F64] mt-4 px-4 py-2 text-sm text-white font-bold'>Send the message </button>
        </form>


    </div>
  )
}

export default Contact