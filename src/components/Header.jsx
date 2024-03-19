import React, { useState } from 'react'

import ngmusic from 'src/assets/images/ngmusic.svg'
import { ReactComponent as MenuIcon } from 'src/assets/icons/menu.svg'
import { ReactComponent as SearchIcon } from 'src/assets/icons/search.svg'
import ModalSearch from './ModalSearch'

export default function Header({ onClickSearch }) {
  const [searchOverlayOpen, setSearchOverlayOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 left-0 -ml-[10%] h-[60px] w-[120%] flex flex-col justify-center rounded-b-[150%] bg-gradient-to-r from-burple-primary to-[#a45deb] shadow-[0_0_6px_0_rgba(148,77,230,0.75)]">
        <div className="w-screen mx-auto px-[15px] flex items-center justify-between md:px-[20px] lg:px-[25px]">
          <MenuIcon className="-mt-3 sm:hidden" />
          <img src={ngmusic} className="sm:-mt-3 content-center" />
          <SearchIcon
            className="-mt-3 cursor-pointer"
            onClick={() => setSearchOverlayOpen(true)}
          />
        </div>
      </header>
      <ModalSearch
        isOpen={searchOverlayOpen}
        setIsOpen={setSearchOverlayOpen}
        onSearch={(v) => {
          onClickSearch(v)
          setSearchOverlayOpen(false)
        }}
      />
    </>
  )
}
