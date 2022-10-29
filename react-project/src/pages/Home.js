import CharacterDisplay from "../components/CharacterDisplay";
import ReactPaginate from 'react-paginate';

// import Form from "../components/Form";


export default function Home({ characters, getCharacters, setCharacters, addToLoved, addToHated }) {

    const fetchCharacters = async (currentPage) => {
        const res = await fetch(`https://legacy--api.herokuapp.com/api/v1/characters?page=${currentPage}`)
        const data = await res.json();
        return data;
      }

    const handlePageClick = async (data) => {
        console.log(data.selected);

        let currentPage = data.selected + 1;

        const charactersFromApi = await fetchCharacters(currentPage);

        setCharacters(charactersFromApi);
    }

    return (
        <div className="homepage">
            <h1>Rate Harry Potter Characters</h1>

            <CharacterDisplay characters={characters} addToHated={addToHated} addToLoved={addToLoved} />  

            <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={33}
            marginPagesDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={'pagination justify-content-center'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            activeClassName={'active'}
            />          
        </div>
    )
}