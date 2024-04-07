import { FaTimes, FaExclamation }from 'react-icons/fa';
import { ModalWrapper, Modal, ErrorIcon, Title, ActionIcon } from '../styled/modal';
import { FlexContainer } from '../styled/common';


const ModalError = ({textError, closeModal}: {textError?: string, closeModal: () => void}) => {
    return (
        <ModalWrapper>
            <Modal>
                <ActionIcon $alignBlock="right" onClick={closeModal}>
                    <FaTimes size={24} />
                </ActionIcon>

                <ErrorIcon>
                    <FlexContainer $alignBlock="center">
                        <FaExclamation size={40} />
                    </FlexContainer>
                </ErrorIcon>

                <FlexContainer $alignBlock="center" $gap="20" $direction="column">
                    <Title>Error</Title>
                    <p>{ textError }</p>
                </FlexContainer>
            </Modal>
        </ModalWrapper>
    )
};

export default ModalError;
