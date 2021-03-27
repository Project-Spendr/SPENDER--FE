import React, { useState } from 'react'
import StatusCard from '../Card/StatusCard';
import { findGoals } from '../../services/apiFetches';

export default function Feed() {

  const [goals, setGoals] = useState([]);
    const [loading, setLoading] = useState(true)

   const loadGoals = async () => {
      const fetchedGoals = await findGoals()
      
      await setGoals(fetchedGoals)
      await setLoading(false)
    }
    
    loadGoals();
    
    console.log(goals, 'bitchass')
    return (
      <div>
        <ul>
        {loading ? <div>Loading</div>
                  : 
          goals.map((item) => {
            return(
              <div className='goals-list'>
                            <StatusCard {...item} />
                        </div>
                    )
                }
                )
        }
        </ul>
      </div>
    )
            }