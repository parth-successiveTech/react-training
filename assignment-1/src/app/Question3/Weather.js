'use client'
export default function Weather({temperature})
{
    let message="weather is nice today"

if(temperature>25)
{
    message="today is a sunny day"
}
else
{
message="today is a cold day";
}
return(
   <div>
    <p>Temperature is {temperature} c</p>
    <p>{message}</p>
   </div>
)
}
