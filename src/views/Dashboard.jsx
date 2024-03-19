import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from 'src/assets/images/logo.svg'

import MusicCard from 'src/components/CardMusic'
import Header from 'src/components/Header'
import FormSearch from 'src/components/FormSearch'

import { getSearchResult } from 'src/store/actions/music.action'

export default function Dashboard() {
  const dispatch = useDispatch()
  const dataList = useSelector((state) => state.music.musicsList)

  const [searchResult, setSearchResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSearch = (event) => {
    setLoading(true)
    if (!dataList) {
      dispatch(getSearchResult(event))
      setLoading(false)
    }
  }

  return searchResult?.length ? (
    <div className="overflow-x-hidden">
      <Header
        onClickSearch={(v) => {
          setSearchResult(v)
          handleSearch(v)
        }}
      />

      <section className="mt-[39px] mb-9">
        <p className="text-sm font-normal text-[#334155] text-center">
          Search result for:{' '}
          <span className="text-burple-primary text-lg font-bold">
            {searchResult}
          </span>
        </p>
      </section>

      <section className="px-[15px] max-w-[1200px] mx-auto">
        {!loading ? (
          <div className="space-y-5 sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {dataList?.map((item, i) => {
              return (
                <MusicCard
                  key={i}
                  thumbnail={item?.artworkUrl100}
                  genre={item?.primaryGenreName}
                  title={item?.trackName}
                  artist={item?.artistName}
                  price={item?.trackPrice}
                />
              )
            })}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </div>
  ) : (
    <div className="w-full relative bg-gradient-to-b from-burple-primary to-[#a45deb] h-screen max-h-screen">
      <div className="h-full flex flex-col justify-center items-center gap-10 max-w-[700px] mx-auto">
        <img src={logo} />
        <footer className="absolute bottom-[26px] px-[30px] w-full md:static">
          <FormSearch
            onSearch={(v) => {
              setSearchResult(v)
              handleSearch(v)
            }}
          />
        </footer>
      </div>
    </div>
  )
}
