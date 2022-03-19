import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text
} from '@chakra-ui/react'
import React from 'react'
import { useSWRConfig } from 'swr'
import { removePlaylistItem } from '~lib/spotify'

type RemoveTrackModalProps = {
  isOpen: boolean
  onClose: () => void
  playlistId: string
  trackUri: string
}

const RemoveTrackModal = ({ isOpen, onClose, playlistId, trackUri }: RemoveTrackModalProps) => {
  const { mutate } = useSWRConfig()

  const handleRemovePlaylistItem = async () => {
    await removePlaylistItem(playlistId, trackUri)
    mutate(`/playlists/${playlistId}`)
    onClose()
  }

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Remove track</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Are you sure you want to remove this track?</Text>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="red" onClick={handleRemovePlaylistItem}>
            Yes
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default RemoveTrackModal
