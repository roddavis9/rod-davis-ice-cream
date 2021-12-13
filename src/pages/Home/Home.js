import React, {useContext, Fragment} from "react";
import { AppContext } from "../../App";
import "./Home.css";

const Home = () => {
    const {
        searchResult
    } = useContext(AppContext);

    return (
        <Fragment>
            <div className={"homeContainer"}>
              <div>
                  search row
              </div>
              <div>
                  result row
              </div>
            </div>
        </Fragment>
    )
}

export default Home;
