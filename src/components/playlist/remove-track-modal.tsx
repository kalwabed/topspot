import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast
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
  const toast = useToast()
  const { mutate } = useSWRConfig()

  const handleRemovePlaylistItem = async () => {
    const { status } = await removePlaylistItem(playlistId, trackUri)

    if (status !== 200) {
      toast({
        status: 'error',
        title: 'Error removing track',
        description: "You cannot remove tracks from a playlist you don't own."
      })
      onClose()
      return
    }

    toast({ status: 'success', title: 'Track removed', description: 'The track has been removed from your playlist.' })
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
