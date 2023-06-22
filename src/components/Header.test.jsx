import {render,screen,fireEvent} from '@testing-library/react'
import Header from "./Header";

// mock my browser 
const handleSearchValue = jest.fn()// mock a function

describe('must display the header component',()=>{
    it('must render the tittle',async()=>{
        render(<Header handleSearchValue={handleSearchValue}/>)
        expect(await screen.findByText(/MovieFlex/i)).toBeInTheDocument()
        const searchBTN = screen.getByText(/SEARCH/i)
        fireEvent.click(searchBTN)
        expect(handleSearchValue).toHaveBeenCalledTimes(1)
    })
})