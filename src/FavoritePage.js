import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';

const FavouritesPage = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Your Favorite Companies</h1>
          {favorites.length === 0 ? (
            <p>No favorites yet</p>
          ) : (
            favorites.map((company) => (
              <div key={company} className="d-flex justify-content-between align-items-center">
                <Link to={`/${company}`} className="text-decoration-none">
                  <h3>{company}</h3>
                </Link>
                <Button variant="danger" onClick={() => handleRemoveFavorite(company)}>
                  Remove
                </Button>
              </div>
            ))
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default FavouritesPage;