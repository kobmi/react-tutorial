import React, { Component, useState, useEffect } from "react";
import Title from "../../components/title/title";
import NewsPost from "../../components/news/news";
import Input from "../../components/input/input";
import Select from "../../components/select/select";
import Pagination from "../../components/pagination/pagination";

const BASE_PATH = "http://hn.algolia.com/api/v1";
const SEARCH_PATH = "/search";
const SEARCH_PARAM = "query=";
const HITS_PER_PAGE_PARAM = "hitsPerPage=";
const PAGE_PARAM = "page=";

const HITS = [
    {
        value: 10,
        label: 10,
    },
    {
        value: 20,
        label: 20,
    },
    {
        value: 50,
        label: 50,
    },
];

class News extends Component {
    state = {
        searchQuery: "",
        result: {
            hits: [],
        },
        hitsPerPage: 10,
        page: 0,
    };

    componentDidMount() {
        console.log("mount");
        const { searchQuery, hitsPerPage, page } = this.state;
        this.getData(searchQuery, hitsPerPage, page);
    }

    getData = (searchQuery, hitsPerPage, page) => {
        console.log("getData");
        fetch(
            `${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}&${HITS_PER_PAGE_PARAM}${hitsPerPage}&${PAGE_PARAM}${page}`
        )
            .then((response) => response.json())
            .then((result) => this.setState({ result: result }))
            .catch((error) => error);
    };

    getSearchData = ({ key }) => {
        if (key === "Enter") {
            const { searchQuery, hitsPerPage } = this.state;
            this.getData(searchQuery, hitsPerPage, 0);
        }
    };

    handleInputChange = ({ target: { value } }) => {
        this.setState({ searchQuery: value });
    };

    handleSelectChange = ({ target: { value } }) => {
        console.log(value);
        const { searchQuery } = this.state;
        this.setState({ hitsPerPage: +value }, () => {
            this.getData(searchQuery, this.state.hitsPerPage, 0);
        });
    };

    handlePageChange = ({ target }) => {
        const btnType = target.getAttribute("data-name");
        let { page } = this.state;

        if (!isNaN(btnType)) {
            this.updatePage(+btnType);
        } else {
            switch (btnType) {
                case "next":
                    this.updatePage(page + 1);
                    break;
                case "prev":
                    this.updatePage(page - 1);
                    break;
                default:
                    return null;
            }
        }
    };

    updatePage = (number) => {
        const { searchQuery, hitsPerPage } = this.state;
        this.setState({ page: number }, () => {
            this.getData(searchQuery, hitsPerPage, number);
        });
    };

    render() {
        const { result } = this.state;
        const {
            searchQuery,
            hitsPerPage,
            result: { hits, page, nbPages },
        } = this.state;
        console.log(result);
        return (
            <div className="container">
                <Title title="Hacker News" />
                <Select
                    options={HITS}
                    value={hitsPerPage}
                    handleChange={this.handleSelectChange}
                />
                <Pagination
                    onClick={this.handlePageChange}
                    page={page}
                    lastPage={nbPages}
                />
                <Input
                    value={searchQuery}
                    onChange={this.handleInputChange}
                    onKeyPress={this.getSearchData}
                />
                <div className="newsList">
                    {hits.map(({ objectID, ...hitsProps }) => (
                        <NewsPost key={objectID} {...hitsProps} />
                    ))}
                </div>
            </div>
        );
    }
}

export default News;

// const News = () => {
//     const [result, setResult] = useState({ hits: [] });
//     const [searchQuery, setSearchQuery] = useState("");
//     const [hitsPerPage, setHitsPerPage] = useState(10);
//     const [page, setPage] = useState(0);

//     useEffect(() => {
//         console.log("UseEffect");
//         getData();
//     }, [hitsPerPage, page]);

//     const getData = () => {
//         console.log("getData");
//         fetch(
//             `${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}&${HITS_PER_PAGE_PARAM}${hitsPerPage}&${PAGE_PARAM}${page}`
//         )
//             .then((response) => response.json())
//             .then((result) => setResult(result))
//             .catch((error) => error);
//     };

//     const getSearchData = ({ key }) => {
//         if (key === "Enter") {
//             console.log("getSearhData");
//             setPage(0);
//             getData();
//         }
//     };

//     const handleInputChange = ({ target: { value } }) => {
//         setSearchQuery(value);
//     };

//     const handleSelectChange = ({ target: { value } }) => {
//         setPage(0);
//         setHitsPerPage(+value);
//     };

//     const handlePageChange = ({ target }) => {
//         const btnType = target.getAttribute("data-name");
//         console.log(btnType);
//         switch (btnType) {
//             case "next":
//                 updatePage(page + 1);
//                 break;
//             case "prev":
//                 updatePage(page - 1);
//                 break;
//             default:
//                 return null;
//         }
//     };

//     const updatePage = (number) => {
//         setPage(number);
//     };

//     console.log(result);
//     console.log(page);
//     return (
//         <div className="container">
//             <Title title="Hacker News" />
//             <Select
//                 options={HITS}
//                 value={hitsPerPage}
//                 handleChange={handleSelectChange}
//             />
//             <Pagination
//                 onClick={handlePageChange}
//                 page={page}
//                 lastPage={result.nbPages}
//             />
//             <Input
//                 value={searchQuery}
//                 onChange={handleInputChange}
//                 onKeyPress={getSearchData}
//             />
//             <div className="newsList">
//                 {result.hits.map(({ objectID, ...hitsProps }) => (
//                     <NewsPost key={objectID} {...hitsProps} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default News;
