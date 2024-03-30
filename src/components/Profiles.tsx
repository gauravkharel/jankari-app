import { FC } from 'react'
import users from '../data/mockdata.json'
import { Card } from './ui/Card'
import { formatDate } from '@/lib/helper'
import { Button } from '@/components/ui/Button'

interface ProfilesProps {

}

const Profiles: FC<ProfilesProps> = () => {
    return <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-md px-8  '>
        {users.map(user => {
            return (
                <Card className='p-2 bg-white flex flex-col gap-2 justify-around align-middle content-center  border-opacity-5 ' key={user.id}>
                    <div className='flex flex-col w-1/6 rounded-full overflow-hidden self-center bg-gray-500 border-3   '>
                        <img src={user.profilepicture} alt={user.name}></img>
                    </div>
                    <div className='p-3'>
                        <div className='pb-2 flex flex-col '>
                            <div className=' font-bold self-center'>{user.name}</div>
                            <div className='text-slate-600 self-center'>{user.email}</div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-around pb-4'>
                        <div>
                            <div className='text-gray-400'>Born on {formatDate(user.dob)}</div>
                            <div className=' text-gray-500'>From {user.address.city}, {user.address.district}</div>
                            <div className=' text-gray-600'>{user.address.province}, {user.address.country} </div>
                        </div>
                        <Button variant={'secondary'}>Click for toast</Button>
                    </div>



                </Card>
            )
        })}
    </div>
}

export default Profiles