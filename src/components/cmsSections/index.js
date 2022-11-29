import { Footer } from "../commons/Footer";
import { Menu } from "../commons/Menu";
import PageHomeHeroSection from "./PageHomeHerosection";
import SeoBlock from "./SeoBlock";

export const cmsSections = {
    CommonSeoBlockRecord: SeoBlock,
    CommonMenuRecord: (props) => <Menu {...props} />,
    PagehomeHerosectionRecord: PageHomeHeroSection,
    CommonFooterRecord: (props) => <Footer {...props} />,
}
