import {render,screen,fireEvent} from '@testing-library/react'
import Movie from './Movie'
const movieList = [
    {
        Poster:'',
        Title:'Matrix'
    }
]

const favorite = movieList

const handleFavoriteMovie = jest.fn()

describe('should render the movies if and array of movies was passed',()=>{
    it('should render the movies',async()=>{
        render(<Movie movieList={movieList}/>)
        expect(await screen.findByText(/Matrix/i)).toBeInTheDocument()
        expect(await screen.findByText(/Add to favorite/i)).toBeInTheDocument()
    })

    it('must render', async()=>{
        render(<Movie movieList={movieList} handleFavoriteMovie={handleFavoriteMovie}/>)
        expect(await screen.findByText(/Add to favorite/i)).toBeInTheDocument()
        const hidenBTN = screen.getByText(/Add to favorite/i)
        fireEvent.click(hidenBTN)
        expect(handleFavoriteMovie).toHaveBeenCalledTimes(1)

    })
    it('must render the button remove from favorite', async()=>{
        render(<Movie movieList={movieList} handleFavoriteMovie={handleFavoriteMovie} favMovie={favorite}/>)
        expect(await screen.findByText(/Add to favorite/i)).toBeInTheDocument()
        const hidenBTN = screen.getByText(/Add to favorite/i)
        fireEvent.click(hidenBTN)
        expect(handleFavoriteMovie).toHaveBeenCalledTimes(1)

    })

   it('should not render any movie',async()=>{
    render(<Movie />)
    expect(screen.queryByText(/Matrix/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Add to favorite/i)).not.toBeInTheDocument()
   })
})