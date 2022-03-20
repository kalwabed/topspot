import { Grid, LinkBox, LinkOverlay } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { UserPlaylists } from '~types/playlists'

const Playlists = ({ playlists }: { playlists: UserPlaylists }) => {
  return (
    <Grid gridTemplateColumns={['none', 'repeat(4,1fr)']} gridTemplateRows={['repeat(1,1fr)', 'none']} gap={6}>
      {playlists?.items?.map(item => (
        <LinkBox
          key={item.id}
          p={4}
          display="flex"
          flexDir="column"
          w="full"
          bgColor="green.100"
          overflow="hidden"
          rounded="md"
          shadow="sm"
          transition="all .2s ease-in-out"
          _hover={{ shadow: 'md', bgColor: 'green.200' }}
        >
          <Image
            src={item?.images[0]?.url || 'https://tkg.af/assets/themes/sharks-english/assets/img/placeholder.jpg'}
            priority
            width={250}
            height={250}
            alt={item.name}
            className="rounded-md"
          />

          <Link href={`/playlists/${item.id}`} passHref>
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
