function Card({cours}) {
  return (
    <div className='flex flex-col text-black font-bold'>
    <img className='w-80 h-80' src={cours.image} alt="cours" />
<p className='p-2'>{cours.name}</p>
<p className='p-2 text-[#B03266]'>{cours.price} DT/Month</p>
</div>
  )
}

export default Card