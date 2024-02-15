import PropTypes  from 'prop-types'

// CONTEXT
import { Theme } from './ThemeContext'
import { useState } from 'react'

export default function ThemeProvider({children}) {

    const [theme, setTheme] = useState('#252525');

    return (
            <Theme.Provider value={{theme, setTheme}}>
                {children}
            </Theme.Provider>
    )
}

ThemeProvider.propTypes = {
    children: PropTypes.node
}

