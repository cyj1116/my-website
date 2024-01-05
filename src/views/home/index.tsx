import React, { memo, useEffect, useState } from "react"
// import CyRequest from "@/services"
const Home = memo(() => {
  // 定义状态
  const [highScore, setHighScore] = useState<any>({
    title: "",
    subtitle: "",
  })

  useEffect(() => {
    // CyRequest.get({ url: "/home/highscore" }).then((res) => {
    //   setHighScore(res)
    // })
  }, [])

  return (
    <div>
      <h2>{highScore.title}</h2>
      <h2>{highScore.subtitle}</h2>
      <ul>
        {highScore.list?.map((item: any) => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  )
})

export default Home
