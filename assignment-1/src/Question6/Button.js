'use client'
export default function Button({text,color})
{
    const styles={
        backgroundColor:color||'gray',
        color:'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '5px',
    };
    return<button style={styles}>{text}</button>;

}