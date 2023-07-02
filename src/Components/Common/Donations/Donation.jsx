import React from 'react'
import {
    Modal, HStack, IconButton, Text, useDisclosure, Button, ModalOverlay, ModalContent, ModalHeader,
    ModalFooter, ModalBody, ModalCloseButton
} from '@chakra-ui/react'
import { BiLogoFlutter } from "react-icons/bi"
import { FaCcMastercard } from "react-icons/fa"
import SolidButton from '../SolidButton'

function Donations() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <SolidButton onClick={onOpen} title="Donate" />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay
                    bg='light'
                    backdropFilter='blur(5px) hue-rotate(90deg)'
                    backdropInvert='80%'
                    backdropBlur='2px'
                />
                <ModalContent width={"auto"}>
                    <ModalHeader>Donation</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Custom backdrop filters!</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Donations;