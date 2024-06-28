import { useEffect, useState } from "react";
import storageHandler from "../helper/storageHandler";

const Dashboard = () => {
  const [email, setEmail] = useState("")


    useEffect(() => {
      const data = storageHandler.getLocalData()
      setEmail(data?.email ||" ")
  }, [])

  return (
    <>
        <h1>Dashboard - {email}</h1>
    </>
  )
}

export default Dashboard



