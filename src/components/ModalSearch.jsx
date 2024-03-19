import React from 'react'
import { ReactComponent as CloseIcon } from 'src/assets/icons/closedBtn.svg'
import { joinClassnames } from 'src/utils/general'

import FormSearch from './FormSearch'

export default function ModalSearch({ isOpen, setIsOpen, onSearch }) {
  return (
    <div
      className={joinClassnames([
        'fixed left-0 top-0 bg-dark-90 duration-200 flex flex-col items-center justify-center p-[30px] gap-4',
        isOpen ? 'w-full h-full opacity-100' : 'w-0 h-0 opacity-0',
      ])}
    >
      <CloseIcon
        className="absolute top-5 right-5"
        onClick={() => setIsOpen(false)}
      />
      <h1 className="text-white font-bold text-xl mb-[31px]">Search</h1>
      <FormSearch buttonVariant="gradient" onSearch={onSearch} />
    </div>
  )
}
