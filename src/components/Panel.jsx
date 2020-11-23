import ThemedComponent from "./ThemedComponent";
import ThemedComponent2 from "./ThemedComponent2";

const Panel = ({theme}) => {
    return (
        <div>
            <p className={"panel " + theme}>Panel</p>
            <ThemedComponent />
            <ThemedComponent2 />
            <ThemedComponent />
        </div>
    );
}
export default Panel;