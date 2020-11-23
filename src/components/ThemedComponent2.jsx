import {useContext} from "react";
import {ThemeContext} from '../providers/ThemeProvider';

const ThemedComponent2 = (props) => {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={"component " + theme}>Komponenta2</div>
    );
}
export default ThemedComponent2;