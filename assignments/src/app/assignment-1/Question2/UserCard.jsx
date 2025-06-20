 'use client'
 export default function UserCard({name,email,avatarURL})
{

return (
    <div>
        <p>{name}</p>
        <p>{email}</p>
        <img src={avatarURL} />
    </div>
);
}