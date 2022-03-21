import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBatchmates } from "../../actions/userActions";
import Loader from "../ui/Loader";
import Message from "../ui/Message";
import Batchmate from "../homePage/Batchmate";
import { Row, Col } from "react-bootstrap";

const Batchmates = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);

  const { loading, batchmates, error } = useSelector(
    (state) => state.getBatchmates
  );

  useEffect(() => {
    dispatch(
      getBatchmates(userInfo.year_of_admission, userInfo.year_of_passing_out)
    );
  }, [dispatch, userInfo.year_of_admission, userInfo.year_of_passing_out]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {batchmates
            .filter((batchmate) => batchmate._id !== userInfo._id)
            .map((batchmate) => (
              <Col sm={12}>
                <Batchmate batchmate={batchmate} key={batchmate._id} />
              </Col>
            ))}
        </Row>
      )}
    </>
  );
};

export default Batchmates;
