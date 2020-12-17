import React, {Fragment} from 'react';
import { IntlProvider } from 'react-intl';
import { LOCALES } from './locales';
import messages from './messages'

const Provider = ({children, local = LOCALES.SPANISH})=>(
    <IntlProvider local={local} textComponent={Fragment} messages={messages[local]}>
        {children}
    </IntlProvider>
)

export default Provider;