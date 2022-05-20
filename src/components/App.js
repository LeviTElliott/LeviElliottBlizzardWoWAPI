import React, { useContext, useState } from 'react'
import { AppContext } from './context-provider'

import Search from './search'
import Character from './character'

const App = () => {
  const [data, setData] = useState({});
  const { charData, error } = useContext(AppContext)
  console.log(charData)
  return (
    <main>
      <Search data={data} setData={setData}/>
      <Character char={data} error={error} />
    </main>
  )
}

export default App