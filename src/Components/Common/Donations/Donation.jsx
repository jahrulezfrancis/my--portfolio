import React, { useState } from 'react'
import { ReactComponent as MasterCard } from "../../../Assets/Images/mc_symbol.svg"
import { ReactComponent as USDC } from "../../../Assets/Images/usd.svg"
import SolidButton from '../SolidButton'
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, useDisclosure, HStack, Icon } from '@chakra-ui/react';




function Donations() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <SolidButton color='white' onClick={onOpen} title="View Resume" />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay
                    bg='light'
                    backdropFilter='blur(5px) hue-rotate(90deg)'
                    backdropInvert='80%'
                    backdropBlur='2px'
                />
                <ModalContent>
                    <ModalHeader>My Resume</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <HStack>
                            <Icon color="#FF9142" fontSize="70px" as={MasterCard} />
                            <Icon color="" fontSize="60px" as={USDC} />
                        </HStack>
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