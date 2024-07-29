import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faDog } from "@fortawesome/free-solid-svg-icons/faDog";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import { useEffect, useState } from "react";
import { Button, Icon, Link, Modal, Text, Title } from "../components";
import { mockData } from "../utils/mockData";
import { upperCaseWords } from "../utils/string";
import "./Home.css";

const Home = () => {
  const [reviewData, setReviewData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState({
    id: "",
    text: "",
  });

  const handleShowModal = (id, type) => {
    setShowModal(true);
    setContentModal({
      ...contentModal,
      id,
      text: `Review ${upperCaseWords(type)}`,
    });

    const newData = [...reviewData];
    const index = newData.findIndex((data) => data.id === id);
    newData[index].selected = !newData[index].selected;

    setReviewData(newData);
  };

  useEffect(() => {
    setReviewData(mockData);
  }, []);

  return (
    <div className='container-md py-2 py-md-5'>
      {reviewData?.map((data) => (
        <div key={data.id} className='card card__selected my-3 my-md-0'>
          <div className='card-body d-flex flex-column flex-md-row'>
            <div className='col-md-4 d-flex justify-content-center align-items-center mb-3'>
              <Icon
                name={data.selected ? faDog : faCheckCircle}
                size='10x'
                color={data.selected ? "red" : "green"}
              />
            </div>
            <div className='col-md-4 d-md-flex flex-md-column justify-content-md-center my-3 mx-md-3'>
              <Title
                text={`Generate ${upperCaseWords(data.type)}`}
                className={"h4"}
              />
              <Text text={data.message} className='pb-3' />
              {data.downloadPdf && (
                <Link
                  text='Print PDF'
                  href='#'
                  target='_blank'
                  icon={faDownload}
                />
              )}
              <Text text={`Submitted on: ${data.submittedOn}`} />
            </div>
            <div className='col-md-4 col-lg-3 d-md-flex flex-md-column justify-content-md-center px-md-5'>
              <Button
                className='w-100'
                big
                text={`Review ${upperCaseWords(data.type)}`}
                dataToggle='modal'
                dataTarget={`#reusable_modal_${data.id}`}
                onClick={() => handleShowModal(data.id, data.type)}
              />
            </div>
          </div>
        </div>
      ))}
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          title='Confirmation'
          id={contentModal.id}
          textCancel='Close'
        >
          <Text text={contentModal.text} />
        </Modal>
      )}
    </div>
  );
};

export default Home;
