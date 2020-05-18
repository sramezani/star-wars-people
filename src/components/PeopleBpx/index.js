import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Box, Stron, More, Hr, ModalItem } from "./styled";

export default function PeopleBpx(props) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Box onClick={() => setShowModal(true)}>
                <p>
                    <Stron>Name: {props.item.name}</Stron>
                </p>

                <div className="row">
                    <div className="col-md-6">
                        <p>
                            <Stron>height:</Stron> {props.item.height}
                        </p>
                        <p>
                            <Stron>mass:</Stron> {props.item.mass}
                        </p>
                    </div>
                    <div className="col-md-6">
                        <p>
                            <Stron>gender:</Stron> {props.item.gender}
                        </p>
                        <p>
                            <Stron>birth_year:</Stron> {props.item.birth_year}
                        </p>
                    </div>
                </div>
                <Hr />
                <More>
                    <p>
                        More detail
                    </p>
                </More>
            </Box>

            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    <Stron>
                        {props.item.name}
                    </Stron>
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ModalItem>
                        <i class="material-icons">height</i> <Stron>height:</Stron> {props.item.height}
                    </ModalItem>
                    <ModalItem>
                        <i class="material-icons">accessibility_new</i> <Stron>mass:</Stron> {props.item.mass}
                    </ModalItem>
                    <ModalItem>
                        <i class="material-icons">invert_colors</i> <Stron>hair_color:</Stron> {props.item.hair_color}
                    </ModalItem>
                    <ModalItem>
                        <i class="material-icons">color_lens</i> <Stron>skin_color:</Stron> {props.item.skin_color}
                    </ModalItem>
                    <ModalItem>
                        <i class="material-icons">colorize</i> <Stron>eye_color:</Stron> {props.item.eye_color}
                    </ModalItem>
                    <ModalItem>
                        <i class="material-icons">child_care</i> <Stron>birth_year:</Stron> {props.item.birth_year}
                    </ModalItem>
                    <ModalItem>
                        <i class="material-icons">face</i> <Stron>gender:</Stron> {props.item.gender}
                    </ModalItem>
                    <ModalItem>
                        <i class="material-icons">local_movies</i> <Stron>count of films:</Stron> {props.item.films.length}
                    </ModalItem>
                    <ModalItem>
                        <i class="material-icons">local_shipping</i> <Stron>count of vehicles:</Stron> {props.item.films.vehicles}
                    </ModalItem>
                    <ModalItem>
                        <i class="material-icons">airplanemode_active</i> <Stron>count of starships:</Stron> {props.item.films.starships}
                    </ModalItem>
                </Modal.Body>
            </Modal>
        </>
    );
}
