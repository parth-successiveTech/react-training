const WithDataFetching =(WrappedData, fetchUrl) => {

    return async function fetching(props){
        const res = await fetch(fetchUrl);
        if(!res.ok){
            throw new Error("failed to fetch");
        }

        const data = await res.json();

        return <WrappedData {...props} data = {data}/>
    };
}


const DisplayData = ({data}) =>{

    return (
        <div><h2>Fetched Data: </h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
        
    );
}

const FetchedData = WithDataFetching(DisplayData, 'https://jsonplaceholder.typicode.com/posts/1');

export default FetchedData;