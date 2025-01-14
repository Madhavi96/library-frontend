import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Card, Row, Col, Tabs, Pagination, Button } from 'antd';
import { fetchBooksRequest } from '../redux/actions/bookActions';
import { PAGE_SIZE } from '../constants/AppConstants';

const { TabPane } = Tabs;

const MainPage = () => {
    const {total, books} = useSelector((state) => state.books.books);
    
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        dispatch(fetchBooksRequest({page: currentPage}));
    }, [currentPage]);

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
                    {books?.map((book) => (
                        <Col key={book.id} span={3}>
                            <Card title={book.name} hoverable cover={
                                <img
                                    className='card-cover-image'
                                    src={`https://covers.openlibrary.org/b/id/${book.urlId}-L.jpg`}
                                />
                            }>
                                <p>{book.authorName}</p>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>

            {/* Pagination */}
            <Pagination
                className="pagination"
                current={currentPage}
                pageSize={PAGE_SIZE}
                total={total}
                onChange={handlePageChange}
                showSizeChanger={false} // Disable changing the page size
            />           
        </div>
    );
};

export default MainPage;
