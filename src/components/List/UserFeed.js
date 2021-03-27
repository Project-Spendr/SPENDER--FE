import React, { useState } from 'react'
import StatusCard from '../Card/StatusCard';
import { findUserGoals } from '../../services/apiFetches';

export default function UserFeed() {

  const [goals, setGoals] = useState([]);
    const [loading, setLoading] = useState(true)

   const loadGoals = async () => {
      const fetchedGoals = await findUserGoals()
      
      await setGoals(fetchedGoals)
      await setLoading(false)
    }
    
    loadGoals();
    return (
      <div>
        <ul>
        {loading ? <div>Loading</div>
                  : 
          goals.map((item) => {
            return(
              <div className='goals-list'>
                            <StatusCard {...item}/>
                        </div>
                    )
            }
          )
        }
        </ul>
      </div>
  )
}