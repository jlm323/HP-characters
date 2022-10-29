export default function NextPrev({ gotoNextPage, gotoPrevPage }) {
    return (
        <div>
            <button onClick={gotoPrevPage}>Previous Page</button>
            <button onClick={gotoNextPage}>Next Page</button>
        </div>
    )
}