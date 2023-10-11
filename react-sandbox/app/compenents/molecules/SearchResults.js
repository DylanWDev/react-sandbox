

export default function SearchResults(props){
    let results = props.data.map((item, i)=>{
        return <li>{i} {item} (click for more)...</li>;
    });

    if(results.length > 0){
        return (
            <ul>
                <li>Results!</li>
            </ul>
        )
    } else {

    return(
        <div>
            <h3>No Results Found</h3>
        </div>
        )
    }
}