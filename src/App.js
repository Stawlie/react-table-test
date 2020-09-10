import React, { useState } from "react";
import Loader from "./components/Loader/Loader";
import Table from "./components/Table/Table";
import RowDetails from "./components/RowDetails/RowDetails";
import Selector from "./components/Selector/Selector";
import Search from "./components/Search/Search";
import ReactPaginate from 'react-paginate';
import _ from 'lodash'
import { FiArrowLeft, FiArrowRight } from 'react-icons/all'
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {

    const length = 50

    const [mode, setMode] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [sortType, setSortType] = useState('asc')
    const [sortId, setSortId] = useState('')
    const [row, setRow] = useState(null)
    const [pageCount, setPageCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const [display, setDisplay] = useState([])
    const [search, setSearch] = useState('')

    React.useEffect(() => {
        setDisplay(_.chunk(filteredData, length)[currentPage] || [])
    }, [currentPage, data, search])

    async function fetchData(url) {
        const response = await fetch(url)
        const fetchedData = await (response.json())
        setIsLoading(false)
        setData(fetchedData)
        setPageCount(fetchedData.length / length)
        setDisplay(_.chunk(fetchedData, length)[currentPage])
    }

    function onSort(dataId) {
        const newData = data.concat()
        const newSortType = sortType === 'asc' ? 'desc' : 'asc'

        const resultData = _.orderBy(newData, dataId, sortType)
        setData(resultData)
        setSortType(newSortType)
        setSortId(dataId)
    }

    function onSelect(row) {
        setRow(row)
    }

    function selectMode(modeType) {
        setMode(true)
        fetchData(modeType)
    }

    function pageChangeHandler({selected}) {
        setCurrentPage(selected)
    }

    function onSearch(value) {
        setSearch(value)
        setCurrentPage(0)
        filterData()
    }

    const filteredData = filterData()

    React.useEffect(() => {
        setPageCount(filteredData.length / length)
    },[filteredData])

    function filterData() {
        if (!search) {
            return data
        } else {
            return data.filter(item => {
                return item['firstName'].toLowerCase().includes(search.toLowerCase())
                || item['lastName'].toLowerCase().includes(search.toLowerCase())
                || item['email'].toLowerCase().includes(search.toLowerCase())
            })
        }
    }

    if (!mode) {
        return (
            <div className={'container'}>
                <Selector selectMode={selectMode}/>
            </div>
        )
    }

    return (
        <div className="container">
            {
                isLoading
                    ? <Loader />
                    :
                    <>
                        <Search onSearch={onSearch}/>
                        <Table data={display} onSort={onSort} sortType={sortType} sortId={sortId} onSelect={onSelect}/>
                    </>
            }

            {
                data.length > length ? <ReactPaginate
                    previousLabel={<FiArrowLeft />}
                    nextLabel={<FiArrowRight />}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={pageChangeHandler}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    nextClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextLinkClassName={'page-link'}
                    forcePage={currentPage}
                />
                : null
            }

            {
                row ? <RowDetails row={row}/> : null
            }
        </div>
    );
}

export default App