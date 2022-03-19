import { Grid, LinkBox, LinkOverlay } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { UserPlaylists } from '~types/playlists'

const Playlists = ({ playlists }: { playlists: UserPlaylists }) => {
  return (
    <Grid gridTemplateColumns="repeat(4,1fr)" gap={6}>
      {playlists?.items?.map(item => (
        <LinkBox
          key={item.id}
          p={4}
          display="flex"
          flexDir="column"
          w="full"
          bgColor="gray.100"
          overflow="hidden"
          rounded="md"
        >
          <Image src={item.images[0].url} width={150} height={200} alt={item.name} className="rounded-md" />

          <Link href="/playlists/123" passHref>
            <LinkOverlay
              title={item.name}
              my={4}
              fontWeight="bold"
              fontSize="lg"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
            >
              {item.name}
            </LinkOverlay>
          </Link>
        </LinkBox>
      ))}
    </Grid>
  )
}

export default Playlists
