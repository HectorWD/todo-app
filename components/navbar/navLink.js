
const NavLink = ({title}) => {
  return (
    <button className=
    {`
    px-6 py-2 md:py-4
    bg-white font-bold font-sans text-md
    border-blue-500 rounded focus:border-b-4
    ease-in-out focus:transition-all focus:duration-150
    `}>
        {title}
    </button>
  )
}

export default NavLink