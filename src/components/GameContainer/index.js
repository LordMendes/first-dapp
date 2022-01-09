import { Container, Row, Col } from 'react-bootstrap'
import CardBoard from '../CardBoard';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Creators as MemoryActions } from "../../store/ducks/memory";

const RawGameContainer = (props) => {

  const handleOnWonCard = (cardId, cardUrl) => {
    console.log(cardId)
    console.log(cardUrl)
  }  
  
  return (
    <Container>
      <Row>
        <h2 className="text-center" style={{padding: "20px"}}>Memory Game</h2>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <CardBoard {...props} onWonCard={handleOnWonCard}></CardBoard>
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  memory: state.memory
})

const mapDispatchToProps = (dispatch) => 
  bindActionCreators(MemoryActions, dispatch);

export const GameContainer = connect(mapStateToProps, mapDispatchToProps)(RawGameContainer);