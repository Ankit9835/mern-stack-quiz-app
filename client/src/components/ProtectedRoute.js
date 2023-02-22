import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currentUser } from '../apicalls/user'
import { SetUser } from '../redux/usersSlice'



const ProtectedRoute = ({children}) => {
const dispatch = useDispatch()
const {user} = useSelector((state) => state.users)
 const getCurrentUser = async () => {
        try {
          const user = await currentUser()
          console.log('current user',user)
          dispatch(SetUser(user.data))
        } catch (error) {
          console.log(error.message)
        }
 }
    
      useEffect(() => {
        getCurrentUser()
      },[])

  return (
    <div>
        {user?.name}
      {children}
    </div>
  )
}

export default ProtectedRoute
