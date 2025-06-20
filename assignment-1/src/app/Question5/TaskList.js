'use client'
export default function TaskList({items})
{
    return(
        <div>
            <h2>Item list:</h2>
            <ul>
                {items.map((item,index)=>(
                    <li key={index}>{item}</li> 

                ))}
            </ul>
        </div>
    )

}