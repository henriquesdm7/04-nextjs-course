import { createContext, useContext } from "react";
import get from 'lodash/get';

const CMSContext = createContext({
    cmsContent: {}
});

export function getCMSContent(path = '') {
    const cmsContent = useContext(CMSContext).cmsContent;

    const output = get(cmsContent, path, cmsContent);
    return output;
}

export default function CMSProvider({ cmsContent, children }) {
    return (
        <CMSContext.Provider value={{ cmsContent }}>
            {children}
        </CMSContext.Provider>
    )
}
