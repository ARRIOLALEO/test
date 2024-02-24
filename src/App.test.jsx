// import dependencies
import React from 'react'

// import API mocking utilities from Mock Service Worker

import {render} from '@testing-library/react'
import App from './App'

describe("something",()=>{
    it("should render app",()=>{
        render(<App/>)
    })
})