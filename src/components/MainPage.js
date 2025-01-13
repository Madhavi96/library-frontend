import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Card, Row, Col, Tabs, Pagination, Button } from 'antd';

const { TabPane } = Tabs;

const MainPage = () => {
    // const books = useSelector((state) => state.books.books);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);

    const page_size = 8

    const books = [
        {
            title: "What Makes You Ill",
            author: "ABC Henry",
            description: "The sixth edition of the series of Harry Potter books",
            urlId: "0005000005"
        },
        {
            title: "New receipes",
            author: "Danielle",
            description: "The sixth edition of the series of Harry Potter books",
            urlId: "0005000022"
        },
        {
            title: "Children's book",
            author: "J.K. Rowling",
            description: "The sixth edition of the series of Harry Potter books",
            urlId: "0005000060"
        },
        {
            title: "Medicine",
            author: "Auth Wer",
            description: "The sixth edition of the series of Harry Potter books",
            urlId: "0005000192"
        },
        {
            title: "Swift",
            author: "ABC DEF",
            description: "The sixth edition of the series of Harry Potter books",
            urlId: "0005000220"
        },
        {
            title: "Nursery Tales",
            author: "Jack H",
            description: "The sixth edition of the series of Harry Potter books",
            urlId: "0005000229"
        },
        {
            title: "Whales and Dolphins",
            author: "H. H. Potter",
            description: "The sixth edition of the series of Harry Potter books",
            urlId: "0005000260"
        },
        {
            title: "A Poet's Journal",
            author: "Jack Andrew",
            description: "The sixth edition of the series of Harry Potter books",
            urlId: "0005000279"
        },
        {
            title: "A Poet's Journal",
            author: "Jack Andrew",
            description: "The sixth edition of the series of Harry Potter books",
            urlId: "0005000279"
        }
    ]
    // Calculate books to display based on the current page
    const startIndex = (currentPage - 1) * page_size;
    const paginatedBooks = books.slice(startIndex, startIndex + page_size);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // useEffect(() => {
    //     dispatch({ type: 'LOAD_BOOKS' });
    // }, [dispatch]);

    return (
        <div className="main-container">
            {/* Header */}
            <header className="header-container">
                <h1 className="header-title">Turku City Library</h1>
                <Tabs className="nav-tabs" defaultActiveKey="1">
                    <TabPane tab="Home" key="1" />
                    <TabPane tab="News" key="2" />
                    <TabPane tab="Events" key="3" />
                    <TabPane tab="Blogs" key="4" />
                </Tabs>

                <Button type="primary" className='main-button' htmlType="submit">
                    Filter
                </Button>
                <Input.Search placeholder="Search books" className="header-search" />
            </header>

            {/* Grid of Books */}
            <section className="book-grid">
                <Row gutter={[16, 16]}>
                    {paginatedBooks.map((book) => (
                        <Col key={book.id} span={3}>
                            <Card title={book.title} hoverable cover={
                                <img
                                    className='card-cover-image'
                                    src={`https://covers.openlibrary.org/b/id/${book.urlId}-L.jpg`}
                                />
                            }>
                                <p>{book.author}</p>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>

            {/* Pagination */}
            <Pagination
                className="pagination"
                current={currentPage}
                pageSize={page_size}
                total={books.length}
                onChange={handlePageChange}
                showSizeChanger={false} // Disable changing the page size
            />

            
        </div>
    );
};

export default MainPage;
