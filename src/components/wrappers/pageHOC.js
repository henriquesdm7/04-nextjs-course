import CMSProvider from "../../infra/cms/cmsProvider";

export function pageHOC(Component) {
    return function Wrapper(props) {
        return (
            <CMSProvider cmsContent={props.cmsContent}>
                <Component {...props} />
            </CMSProvider>
        )
    }
}
