import React, {useContext, Fragment} from "react";
import { AppContext } from "../../App";
import "./Home.css";

const Home = () => {
    const {
        searchResult
    } = useContext(AppContext);

    return (
        <Fragment>
            <div className="homeContainer">
              <div className="searchContainer">
                  search row
              </div>
              <div className="resultContainer">
                  result row
              </div>
            </div>
        </Fragment>
    )
}

export default Home;
