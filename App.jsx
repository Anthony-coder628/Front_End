import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")

        console.log(data)
        setUsers(data)
      } catch(error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    getUsers()
  }, [])

  return (
      <div className='px-4 py-8 w-full'>
        <table className='border text-[12px] w-full'>
          <thead className=''>
            <tr className=''>
              <th className='w-10 text-left border'>ID</th>
              <th className='w-50 text-left border'>Name</th>
              <th className='w-50 text-left border'>Username</th>
              <th className='w-50 text-left border'>Email</th>
              <th className='w-50 text-left border'>Phone</th>
              <th className='w-50 text-left border'>Company</th>
              <th className='w-50 text-left border'>Address</th>
              <th className='w-50 text-left border'>Website</th>
            </tr>
          </thead>

          <tbody className=''>
            {
              users.map((user) => (
                <tr key={user.id} className=''>
                  <td className='w-50 border'>{user.id}</td>
                  <td className='w-50 border'>{user.name}</td>
                  <td className='w-50 border'>{user.username}</td>
                  <td className='w-50 border'>{user.email}</td>
                  <td className='w-50 border'>{user.phone}</td>
                  <td className='w-50 border'>{user.company.name}</td>
                  <td className='w-50 border'>{`${user.address.street}, ${user.address.city}, ${user.address.suite}`}</td>
                  <td className='w-50 border'>{user.website}</td>
                </tr>
              ))
            }
          </tbody>
        </table>

        <index />
      </div>
  )
}

export default App