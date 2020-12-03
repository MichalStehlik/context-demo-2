import {useContext} from "react";
import {ThemeContext} from '../providers/ThemeProvider';

const ThemedComponent = (props) => {
    const {theme, setTheme} = useContext(ThemeContext);
    return (
        <div className={"component " + theme}>Komponenta</div>
    );
}
export default ThemedComponent;
