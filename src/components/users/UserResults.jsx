import {useEffect, useContext} from 'react'
import Spinner from '../layout/Spinner'
import UserItem from '../users/Useritem'
import {GithubContext} from '../../context/github/GithubContext'

function UserResults(){
    const {users, loading, fetchUsers} = useContext(GithubContext)

    useEffect (()=>{
        fetchUsers()
    },[])
    if (!loading) {
        return (
          <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grod-cols-3 md:grid-cols-2'>
              {users.length > 0 && users.map(user => <UserItem key={user.id} user={user} />)}
          </div>
        )
    }

    return <Spinner />
}

export default UserResults
