import { Box, IconButton } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { HiArrowLeft } from 'react-icons/hi'

const PlaylistNavigation = () => {
  const router = useRouter()

  return (
    <Box display={['none', 'block']} mb={4} mt={[4, 2]}>
      <IconButton
        aria-label="Back"
        variant="outline"
        rounded="full"
        size="lg"
        title="Back"
        icon={<HiArrowLeft />}
        onClick={router.back}
      />
    </Box>
  )
}

export default PlaylistNavigation
